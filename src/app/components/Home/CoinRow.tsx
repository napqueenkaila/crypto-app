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
  rank: number;
  currentPrice: number;
  hourPriceChangePercent: number;
  dayPriceChangePercent: number;
  weekPriceChangePercent: number;
  marketCap: number;
  totalVolume: number;
  circulatingSupply: number;
  totalSupply: number;
  sparkline: { prices: [] };
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
    rank,
    currentPrice,
    hourPriceChangePercent,
    dayPriceChangePercent,
    weekPriceChangePercent,
    marketCap,
    totalVolume,
    circulatingSupply,
    totalSupply,
    // sparkline,
  } = coinData;

  return (
    <StyledRow>
      <td>{rank}</td>
      <td>
        <Image src={image} alt="" width={25} height={25} />
        {name} ({symbol.toUpperCase()})
      </td>
      <td>${currentPrice}</td>
      <td>
        <Image src="GreenArrow.svg" alt="" width={25} height={25} />
        {hourPriceChangePercent}
      </td>
      <td>
        <Image src="GreenArrow.svg" alt="" width={25} height={25} />
        {dayPriceChangePercent}
      </td>
      <td>
        <Image src="GreenArrow.svg" alt="" width={25} height={25} />
        {weekPriceChangePercent}
      </td>
      <td>
        <PercentageBarDiv>
          <Percent $percent={(totalVolume / marketCap) * 100} />
        </PercentageBarDiv>
      </td>
      <td>
        <PercentageBarDiv>
          <Percent $percent={(circulatingSupply / totalSupply) * 100} />
        </PercentageBarDiv>
      </td>
      <td>Line chart here</td>
    </StyledRow>
  );
};

export default CoinRow;
