import styled from "styled-components";
import { useAppSelector } from "../redux/hooks";
import { selectCurrency } from "../redux/features/currencySlice";

const StatsContainer = styled.div`
  grid-area: stats;
`;

const StatDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Name = styled.div`
  font-size: 16px;
  font-weight: 400;
`;

const Value = styled.div`
  font-weight: 500;
  font-size: 20px;
`;

interface CoinStatsProps {
  market_cap: Record<string, number>;
  fully_diluted_valuation: Record<string, number>;
  total_volume: Record<string, number>;
  circulating_supply: number;
  max_supply: number;
}

const CoinStats = ({ marketData }: { marketData: CoinStatsProps }) => {
  const { currency } = useAppSelector(selectCurrency);

  return (
    <StatsContainer>
      <StatDiv>
        <Name>Market Cap</Name>
        <Value>{marketData.market_cap[currency]}</Value>
      </StatDiv>
      <StatDiv>
        <Name>Fully Diluted Valuation</Name>
        <Value>
          {marketData.fully_diluted_valuation[currency]}
        </Value>
      </StatDiv>
      <StatDiv>
        <Name>Volume 24h</Name>
        <Value>{marketData.total_volume[currency]}</Value>
      </StatDiv>
      <StatDiv>
        <Name>Volume/Market</Name>
        <Value>(what r this)</Value>
      </StatDiv>
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
      <div>percent bar here</div>
    </StatsContainer>
  );
};

export default CoinStats;
