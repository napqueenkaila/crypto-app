import styled from "styled-components";
import { useEffect, useState } from "react";
import { useAppSelector } from "@/app/redux/hooks";
import { selectCurrency } from "@/app/redux/features/currencySlice";
import {
  selectCoinOne,
  selectCoinTwo,
} from "@/app/redux/features/selectedCoinsSlice";
import { useGetChartDataQuery } from "@/app/redux/features/api";
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
  const [skip, setSkip] = useState(true);
  const { currency } = useAppSelector(selectCurrency);
  const coinOneSelected = useAppSelector(selectCoinOne);
  const coinTwoSelected = useAppSelector(selectCoinTwo);
  const [selectedDays, setSelectedDays] = useState(7);
  const { data: coinOneData, isSuccess } = useGetChartDataQuery({
    currency,
    selectedCoinId: coinOneSelected.id,
    selectedDays,
  });
  const { data: coinTwoData } = useGetChartDataQuery(
    { currency, selectedCoinId: coinTwoSelected.id, selectedDays },
    { skip }
  );

  useEffect(() => {
    if (coinTwoSelected.id === "") {
      setSkip(true);
    } else if (coinTwoSelected.id !== "") {
      setSkip(false);
    }
  }, [coinTwoSelected]);

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
              chartDataOne={coinOneData.prices}
              chartDataTwo={coinTwoData?.prices}
              todaysDate={todaysDate}
            />
            <BarChart
              coinOne={coinOneSelected}
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
