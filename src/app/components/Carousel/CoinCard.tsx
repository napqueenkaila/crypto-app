import styled from "styled-components";
import Image from "next/image";

const Wrapper = styled.div`
display: inline-block`;

const CardContainer = styled.div`
  box-shadow: 4px 4px 20px 8px #7878fa26;
  background-color: #191925;
  border: 1px;
  width: 252px;
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

const CoinCard = () => {
  return (
    <Wrapper>
      <CardContainer>
        <CoinIcon src="BTCIcon.svg" alt="" width={32} height={32} />
        <CoinName>Bitcoin (BTC)</CoinName>
        <CoinPrice>27,445.55 USD</CoinPrice>
        <CoinPercent>2.35%</CoinPercent>
      </CardContainer>
    </Wrapper>
  );
};

export default CoinCard;
