import styled from "styled-components";
import { useEffect, useState } from "react";
import { useAppSelector } from "@/app/redux/hooks";
import { selectCurrency } from "@/app/redux/features/currencySlice";
import {
  selectCoinOne,
  selectCoinTwo,
} from "@/app/redux/features/selectedCoinsSlice";
import {
  useGetChartDataQuery,
  useLazyGetChartDataQuery,
} from "@/app/redux/features/api";
import RangeBar from "./RangeBar";
import LineChart from "./LineChart";
import BarChart from "./BarChart";
import { todaysDate } from "./utils";

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  height: 400px;
`;

const ChartsContainer = () => {
  const { currency } = useAppSelector(selectCurrency);
  const coinOneSelected = useAppSelector(selectCoinOne);
  const coinTwoSelected = useAppSelector(selectCoinTwo);
  const [selectedDays, setSelectedDays] = useState(7);
  const { data: coinOneData, isSuccess } = useGetChartDataQuery({
    currency,
    selectedCoinId: coinOneSelected.id,
    selectedDays,
  });

  const [trigger, result] = useLazyGetChartDataQuery();
  const { data: coinTwoData } = result;
  
  useEffect(() => {
    if (coinTwoSelected.id !== "") {
      trigger({
        currency: currency,
        selectedCoinId: coinTwoSelected.id,
        selectedDays: selectedDays,
      });
    }
  }, [coinTwoSelected, currency, selectedDays, trigger]);

  const handleDaysChange = (e) => {
    const newDays = Number(e.target.value);
    setSelectedDays(newDays);
  };

  return (
    <>
      <Container>
        {isSuccess ? (
          <>
            <LineChart
              coinOne={coinOneSelected}
              coinTwo={coinTwoSelected}
              chartDataOne={coinOneData.prices}
              chartDataTwo={coinTwoData?.prices}
              todaysDate={todaysDate}
            />
            <BarChart
              coinOne={coinOneSelected}
              coinTwo={coinTwoSelected}
              chartDataOne={coinOneData.total_volumes}
              chartDataTwo={coinTwoData?.total_volumes}
              todaysDate={todaysDate}
            />
          </>
        ) : null}
      </Container>
      <RangeBar handleChange={handleDaysChange} selectedDays={selectedDays} />
    </>
  );
};
export default ChartsContainer;
