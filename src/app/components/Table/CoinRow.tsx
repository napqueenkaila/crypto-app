import Image from "next/image";
import styled from "styled-components";
import PercentBar from "./PercentBar";
import SmallChart from "./SmallChart";
import PercentChange from "./PercentChange";

interface Props {
  coinData: CoinData;
}

interface CoinData {
  id: string;
  name: string;
  symbol: string;
  image: string;
  market_cap_rank: number;
  current_price: number;
  price_change_percentage_1h_in_currency: number;
  price_change_percentage_24h_in_currency: number;
  price_change_percentage_7d_in_currency: number;
  market_cap: number;
  total_volume: number;
  circulating_supply: number;
  total_supply: number;
  sparkline_in_7d: { price: number[] };
}

const StyledRow = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  background-color: #191925;
  border-radius: 12px;
  gap: 5px;
`;

const FlexGrowOne = styled.div`
  flex-grow: 1;
`;
const FlexGrowTwo = styled.div`
  flex-grow: 2;
`;
const FlexGrowThree = styled.div`
  flex-grow: 3;
`;
const FlexGrowFour = styled.div`
  flex-grow: 4;
`;

const RankDiv = styled(FlexGrowOne)`
  color: #d1d1d1;
  font-weight: 500;
`;

const NameDiv = styled(FlexGrowFour)`
  display: flex;
  align-items: center;
  gap: 10px;
  max-width: 200px;
  .name {
    overflow-wrap: break-word;
  }
`;

const CoinRow = ({ coinData }: Props) => {
  const {
    name,
    symbol,
    image,
    market_cap_rank,
    current_price,
    price_change_percentage_1h_in_currency,
    price_change_percentage_24h_in_currency,
    price_change_percentage_7d_in_currency,
    market_cap,
    total_volume,
    circulating_supply,
    total_supply,
    sparkline_in_7d,
  } = coinData;

  return (
    <StyledRow>
      <RankDiv>{market_cap_rank}</RankDiv>
      <NameDiv>
        <Image src={image} alt="" width={32} height={32} />
        <div className="name">
          {name} ({symbol.toUpperCase()})
        </div>
      </NameDiv>
      <FlexGrowTwo>${current_price}</FlexGrowTwo>
      <PercentChange percentChange={price_change_percentage_1h_in_currency}/>
      <PercentChange percentChange={price_change_percentage_24h_in_currency}/>
      <PercentChange percentChange={price_change_percentage_7d_in_currency}/>
      <PercentBar value1={total_volume} value2={market_cap} />
      <PercentBar value1={circulating_supply} value2={total_supply} />
      <FlexGrowThree>
        <SmallChart smallChartData={sparkline_in_7d.price} />
      </FlexGrowThree>
    </StyledRow>
  );
};

export default CoinRow;
