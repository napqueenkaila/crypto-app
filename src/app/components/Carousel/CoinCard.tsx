import styled from "styled-components";
import Image from "next/image";

const Wrapper = styled.div`
  display: inline-block;
`;

const CardContainer = styled.div`
  box-shadow: 4px 4px 20px 8px #7878fa26;
  background-color: #191925;
  border: 1px;
  width: 200px;
  height: 78px;
  display: grid;
  grid-template-areas:
    "Icon Name Name"
    "Icon Price Percent";
`;

const CoinIcon = styled(Image)`
  grid-area: Icon;
  place-self: center;
`;

const CoinName = styled.div`
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  grid-area: Name;
  align-self: end;
`;

const CoinPrice = styled.div`
  color: #d1d1d1;
  font-size: 14px;
  font-weight: 400;
  grid-area: Price;
`;

const CoinPercent = styled.div`
  font-size: 14px;
  font-weight: 400;
  grid-area: Percent;
  color: #01f1e3;
`;

interface CarouselData {
  id: string;
  name: string;
  symbol: string;
  image: string;
  current_price: number;
  price_change_percentage_24h: number;
}

const CoinCard = ({ coinData }: {coinData: CarouselData}) => {

  return (
    <Wrapper>
      <CardContainer>
        <CoinIcon src={coinData.image} alt="" width={32} height={32} />
        <CoinName>
          {coinData.name} ({coinData.symbol.toUpperCase()})
        </CoinName>
        <CoinPrice>{coinData.current_price} USD</CoinPrice>
        <CoinPercent>{coinData.price_change_percentage_24h.toFixed(2)}</CoinPercent>
      </CardContainer>
    </Wrapper>
  );
};

export default CoinCard;
