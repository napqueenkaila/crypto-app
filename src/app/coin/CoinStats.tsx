import styled from "styled-components";
import { useAppSelector } from "../redux/hooks";
import { selectCurrency } from "../redux/features/currencySlice";

const StatsContainer = styled.div`
  grid-area: stats;
  background-color: #1e1932;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const StatDiv = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

const Name = styled.div`
  font-size: 16px;
  font-weight: 400;
  white-space: pre-wrap;
`;

const Value = styled.div`
  font-weight: 500;
  font-size: 20px;
`;

const PercentageBarDiv = styled.div`
  width: 100%;
  height: 6px;
  background-color: #ffffff66;
  border-radius: 2px;
`;

interface PercentProps {
  $percent?: number | string;
}

const Percent = styled.div<PercentProps>`
  height: 100%;
  width: ${(props) => `${props.$percent}%`};
  background-color: ${(props) => props.color};
`;

const ValuesDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledValues = styled.div`
  font-size: 12px;
`;

interface CoinStatsProps {
  market_cap: Record<string, number>;
  fully_diluted_valuation: Record<string, number>;
  total_volume: Record<string, number>;
  circulating_supply: number;
  max_supply: number;
  total_supply: number;
}

const CoinStats = ({ marketData }: { marketData: CoinStatsProps }) => {
  const { currency } = useAppSelector(selectCurrency);

  const percentCirculatingSupply =
    (marketData.circulating_supply / marketData.total_supply) * 100;
  const percentTotalSupply = 100 - percentCirculatingSupply;

  return (
    <StatsContainer>
      <StatDiv>
        <Name>Market Cap</Name>
        <Value>{marketData.market_cap[currency]}</Value>
      </StatDiv>
      <StatDiv>
        <Name>Fully Diluted Valuation</Name>
        <Value>{marketData.fully_diluted_valuation[currency]}</Value>
      </StatDiv>
      <StatDiv>
        <Name>Volume 24h</Name>
        <Value>{marketData.total_volume[currency]}</Value>
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
        <Value>{marketData.total_volume[currency]}</Value>
      </StatDiv>
      <StatDiv>
        <Name>Circulating Supply</Name>
        <Value>{marketData.circulating_supply}</Value>
      </StatDiv>
      <StatDiv>
        <Name>Max Supply</Name>
        <Value>{marketData.max_supply}</Value>
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
