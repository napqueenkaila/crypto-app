import Image from "next/image";
import styled from "styled-components";
import PercentBar from "./PercentBar";

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

const RankDiv = styled.div`
  color: #d1d1d1;
  font-weight: 500;
`;

const PercentChangeDiv = styled.div`
  color: #01f1e3;
  font-size: 14px;
  display: flex;
  align-items: center;
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
    // sparkline_in_7d,
  } = coinData;

  return (
    <StyledRow>
      <RankDiv>{market_cap_rank}</RankDiv>
      <div>
        <Image src={image} alt="" width={32} height={32} />
      </div>
      <div>
        {name} ({symbol.toUpperCase()})
      </div>
      <div>${current_price}</div>
      <PercentChangeDiv>
        <Image src="GreenArrow.svg" alt="" width={10} height={16} />
        {price_change_percentage_1h_in_currency.toFixed(2)}%
      </PercentChangeDiv>
      <PercentChangeDiv>
        <Image src="GreenArrow.svg" alt="" width={10} height={16} />
        {price_change_percentage_24h_in_currency.toFixed(2)}%
      </PercentChangeDiv>
      <PercentChangeDiv>
        <Image src="GreenArrow.svg" alt="" width={10} height={16} />
        <div>
        {price_change_percentage_7d_in_currency.toFixed(2)}%
        </div>
      </PercentChangeDiv>

      <PercentBar value1={total_volume} value2={market_cap} />
      <PercentBar value1={circulating_supply} value2={total_supply} />
     
      <div>Line chart here</div>
    </StyledRow>
  );
};

export default CoinRow;
