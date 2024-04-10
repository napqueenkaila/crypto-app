import styled from "styled-components";
import LineChart from "./LineChart";
import BarChart from "./BarChart";
import { useGetChartDataQuery } from "@/app/redux/features/api";
import { useAppSelector } from "@/app/redux/hooks";
import { selectCurrency } from "@/app/redux/features/currencySlice";

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  height: 400px;
`;

const ChartsContainer = () => {
  const { currency } = useAppSelector(selectCurrency);
  const defaultCoin = "bitcoin";
  const { data, isSuccess } = useGetChartDataQuery({currency, defaultCoin});
  const todaysDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(Date.now()));

  return (
    <Container>
      {isSuccess ? (
        <>
          <LineChart chartData={data.prices} todaysDate={todaysDate} />
          <BarChart chartData={data.total_volumes} todaysDate={todaysDate} />
        </>
      ) : null}
    </Container>
  );
};
export default ChartsContainer;
