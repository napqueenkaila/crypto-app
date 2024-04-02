import styled from "styled-components";
import { useAppSelector } from "../redux/hooks";
import { selectCurrency } from "../redux/features/currencySlice";

const ProfitDiv = styled.div`
  border-radius: 12px;
  background-color: #1e1932;
  max-width: fit-content;
  padding: 40px 56px;
  grid-area: profit;
`;

interface Props {
  current_price: Record<string, number>;
  ath: Record<string, number>;
  ath_date: Record<string, string>;
  atl: Record<string, number>;
  atl_date: Record<string, string>;
}

const CoinProfit = ({ marketData }: { marketData: Props }) => {
  const { currency } = useAppSelector(selectCurrency);

  const formatCurrency = (num: number) => {
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency,
      minimumFractionDigits: 0,
    });
    return formatter.format(num);
  };

  const formatDate = (dateStr: string): string => {
    const date = new Date(dateStr);
    const options: Intl.DateTimeFormatOptions = {
      weekday: "short",
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      timeZoneName: "short",
    };
    const formatter = new Intl.DateTimeFormat("en-US", options);
    return formatter.format(date);
  };

  return (
    <ProfitDiv>
      <div>{formatCurrency(marketData.current_price[currency])}</div>
      <div>Profit: profit</div>
      <div>
        <div>All time high: {formatCurrency(marketData.ath[currency])}</div>
        <div>{formatDate(marketData.ath_date[currency])}</div>
      </div>
      <div>
        <div>All time low: {formatCurrency(marketData.atl[currency])}</div>
        <div>{formatDate(marketData.atl_date[currency])}</div>
      </div>
    </ProfitDiv>
  );
};

export default CoinProfit;
