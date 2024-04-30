import { useAppSelector } from "../redux/hooks";
import { selectCurrency } from "../redux/features/currencySlice";
import { formatCurrencyWithCommas, formatNumberWithCommas } from "../utils";
import {
  StatsContainer,
  StatDiv,
  Name,
  Value,
  PercentageBarDiv,
  Percent,
  ValuesDiv,
  StyledValues,
} from "../styling/components/CoinPage/styled.CoinStats";
import { CoinStatsProps } from "../types/interfaces/coinPage.interfaces";

const CoinStats = ({
  marketData,
  symbol,
}: {
  marketData: CoinStatsProps;
  symbol: string;
}) => {
  const { currency } = useAppSelector(selectCurrency);

  const percentCirculatingSupply =
    (marketData.circulating_supply / marketData.total_supply) * 100;
  const percentTotalSupply = 100 - percentCirculatingSupply;

  return (
    <StatsContainer>
      <StatDiv>
        <Name>Market Cap</Name>
        <Value>
          {formatCurrencyWithCommas(marketData.market_cap[currency], currency)}
        </Value>
      </StatDiv>
      <StatDiv>
        <Name>Fully Diluted Valuation</Name>
        <Value>
          {formatCurrencyWithCommas(
            marketData.fully_diluted_valuation[currency],
            currency
          )}
        </Value>
      </StatDiv>
      <StatDiv>
        <Name>Volume 24h</Name>
        <Value>
          {formatCurrencyWithCommas(
            marketData.total_volume[currency],
            currency
          )}
        </Value>
      </StatDiv>
      <StatDiv>
        <Name>Volume/Market</Name>
        <Value>
          {(
            marketData.total_volume[currency] / marketData.market_cap[currency]
          ).toFixed(5)}
        </Value>
      </StatDiv>
      <br />
      <StatDiv>
        <Name>Total Volume</Name>
        <Value>
          {formatNumberWithCommas(marketData.total_volume[currency])}{" "}
          {symbol.toUpperCase()}
        </Value>
      </StatDiv>
      <StatDiv>
        <Name>Circulating Supply</Name>
        <Value>
          {formatNumberWithCommas(marketData.circulating_supply)}{" "}
          {symbol.toUpperCase()}
        </Value>
      </StatDiv>
      <StatDiv>
        <Name>Max Supply</Name>
        <Value>
          {formatNumberWithCommas(marketData.max_supply)} {symbol.toUpperCase()}
        </Value>
      </StatDiv>
      <br />
      <div>
        <ValuesDiv>
          <StyledValues>{percentCirculatingSupply.toFixed(0)}%</StyledValues>
          <StyledValues>{percentTotalSupply.toFixed(0)}%</StyledValues>
        </ValuesDiv>
        <PercentageBarDiv>
          <Percent color="#f7931a" $percent={percentCirculatingSupply} />
        </PercentageBarDiv>
      </div>
    </StatsContainer>
  );
};

export default CoinStats;
