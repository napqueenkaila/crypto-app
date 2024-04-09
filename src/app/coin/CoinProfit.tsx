import { useAppSelector } from "../redux/hooks";
import { selectCurrency } from "../redux/features/currencySlice";
import { formatCurrencyWithCommas, formatAllTimeDate } from "../utils";
import {
  ProfitDiv,
  CurrentPrice,
  AllTimeDiv,
  AllTimeTitle,
  AllTimeDate,
  StyledArrow,
  StyledSpan,
} from "../styling/components/CoinPage/styled.CoinProfit";

interface Props {
  current_price: Record<string, number>;
  ath: Record<string, number>;
  ath_date: Record<string, string>;
  atl: Record<string, number>;
  atl_date: Record<string, string>;
}

const CoinProfit = ({ marketData }: { marketData: Props }) => {
  const { currency } = useAppSelector(selectCurrency);

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
        <AllTimeDate>
          {formatAllTimeDate(marketData.ath_date[currency])}
        </AllTimeDate>
      </AllTimeDiv>
      <AllTimeDiv>
        <StyledArrow isPositive={false} />
        <AllTimeTitle>
          All time low:{" "}
          <StyledSpan>
            {formatCurrencyWithCommas(marketData.atl[currency], currency)}
          </StyledSpan>
        </AllTimeTitle>
        <AllTimeDate>
          {formatAllTimeDate(marketData.atl_date[currency])}
        </AllTimeDate>
      </AllTimeDiv>
    </ProfitDiv>
  );
};

export default CoinProfit;
