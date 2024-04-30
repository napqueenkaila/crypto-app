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
import { CoinProfitProps } from "../types/interfaces/coinPage.interfaces";

const CoinProfit = ({ marketData }: { marketData: CoinProfitProps }) => {
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
