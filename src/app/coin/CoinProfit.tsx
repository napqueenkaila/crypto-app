import styled from "styled-components";
import { useAppSelector } from "../redux/hooks";
import { selectCurrency } from "../redux/features/currencySlice";
import { ArrowIcon } from "../components/SVGs";
import { formatCurrencyWithCommas } from "../utils";

const ProfitDiv = styled.div`
  border-radius: 12px;
  background-color: #1e1932;
  max-width: fit-content;
  padding: 40px 56px;
  grid-area: profit;
`;

const CurrentPrice = styled.div`
  font-weight: 700;
  font-size: 28px;
`;

const AllTimeDiv = styled.div`
  display: grid;
  grid-template-areas:
    "arrow title"
    "arrow date";
  place-items: center left;
`;

const StyledArrow = styled(ArrowIcon)`
  grid-area: arrow;
`;

const AllTimeTitle = styled.div`
  font-weight: 400;
  font-size: 16px;
  grid-area: title;
  text-overflow: ellipsis;
`;

const StyledSpan = styled.span`
  font-weight: 500;
  font-size: 20px;
`;

const AllTimeDate = styled.div`
  color: #b9b9ba;
  font-weight: 400;
  font-size: 14px;
  grid-area: date;
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
      <CurrentPrice>
        {formatCurrencyWithCommas(marketData.current_price[currency], currency)}
      </CurrentPrice>
      <div>Profit: profit</div>
      <AllTimeDiv>
        <StyledArrow isPositive={true} />
        <AllTimeTitle>
          All time high:{" "}
          <StyledSpan>
            {formatCurrencyWithCommas(marketData.ath[currency], currency)}
          </StyledSpan>
        </AllTimeTitle>
        <AllTimeDate>{formatDate(marketData.ath_date[currency])}</AllTimeDate>
      </AllTimeDiv>
      <AllTimeDiv>
        <StyledArrow isPositive={false} />
        <AllTimeTitle>
          All time low:{" "}
          <StyledSpan>
            {formatCurrencyWithCommas(marketData.atl[currency], currency)}
          </StyledSpan>
        </AllTimeTitle>
        <AllTimeDate>{formatDate(marketData.atl_date[currency])}</AllTimeDate>
      </AllTimeDiv>
    </ProfitDiv>
  );
};

export default CoinProfit;
