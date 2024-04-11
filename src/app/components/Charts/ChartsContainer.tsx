import styled from "styled-components";
import LineChart from "./LineChart";
import BarChart from "./BarChart";
import { useGetChartDataQuery } from "@/app/redux/features/api";
import { useAppSelector } from "@/app/redux/hooks";
import { selectCurrency } from "@/app/redux/features/currencySlice";
import RangeBar from "./RangeBar";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  height: 400px;
`;

const ChartsContainer = () => {
  const { currency } = useAppSelector(selectCurrency);
  const defaultCoin = "bitcoin";
  const [range, setRange] = useState(180);
  const ranges = [
    { value: "1D", days: 1 },
    { value: "7D", days: 7 },
    { value: "14D", days: 14 },
    { value: "1M", days: 30 },
    { value: "1Y", days: 365 }
  ];
  const { data, isSuccess } = useGetChartDataQuery({
    currency,
    defaultCoin,
    range,
  });

  const todaysDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(Date.now()));

  const handleRangeChange = (e) => {
    setRange(e.target.value);
  };
  
  return (
    <>
      <Container>
        {isSuccess ? (
          <>
            <LineChart chartData={data.prices} todaysDate={todaysDate} />
            <BarChart chartData={data.total_volumes} todaysDate={todaysDate} />
          </>
        ) : null}
      </Container>
      <RangeBar handleChange={handleRangeChange} ranges={ranges} />
    </>
  );
};
export default ChartsContainer;
