import Image from "next/image";
import styled from "styled-components";

const StyledRow = styled.tr``;

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

const PercentageBarDiv = styled.div`
  width: 200px;
  height: 6px;
  border-radius: 2px;
  background-color: #c2772180;
`;

interface PercentProps {
  $percent?: number | string;
}

const Percent = styled.div<PercentProps>`
  height: 100%;
  width: ${(props) => `${props.$percent}%`};
  background-color: black;
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
      <td>{market_cap_rank}</td>
      <td>
        <Image src={image} alt="" width={25} height={25} />
        {name} ({symbol.toUpperCase()})
      </td>
      <td>${current_price}</td>
      <td>
        <Image src="GreenArrow.svg" alt="" width={25} height={25} />
        {price_change_percentage_1h_in_currency}
      </td>
      <td>
        <Image src="GreenArrow.svg" alt="" width={25} height={25} />
        {price_change_percentage_24h_in_currency}
      </td>
      <td>
        <Image src="GreenArrow.svg" alt="" width={25} height={25} />
        {price_change_percentage_7d_in_currency}
      </td>
      <td>
        <PercentageBarDiv>
          <Percent $percent={(total_volume / market_cap) * 100} />
        </PercentageBarDiv>
      </td>
      <td>
        <PercentageBarDiv>
          <Percent $percent={(circulating_supply / total_supply) * 100} />
        </PercentageBarDiv>
      </td>
      <td>Line chart here</td>
    </StyledRow>
  );
};

export default CoinRow;
