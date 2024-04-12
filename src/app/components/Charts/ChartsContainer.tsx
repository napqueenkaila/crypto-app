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
  const [selectedDays, setSelectedDays] = useState(7);
  const { data, isSuccess } = useGetChartDataQuery({
    currency,
    defaultCoin,
    selectedDays,
  });

  const todaysDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(Date.now()));

  const handleDaysChange = (e) => {
    const newDays = Number(e.target.value);
    setSelectedDays(newDays);
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
      <RangeBar
        handleChange={handleDaysChange}
        selectedDays={selectedDays}
      />
    </>
  );
};
export default ChartsContainer;
