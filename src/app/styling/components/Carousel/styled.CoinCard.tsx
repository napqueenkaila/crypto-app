import styled from "styled-components";
import Image from "next/image";

const Wrapper = styled.div`
  display: inline-block;
`;

const CardContainer = styled.div`
  background-color: #191925;
  border: 1px;
  width: 200px;
  padding: 16px;
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

const CoinPercent = styled.div<{ $isPositive: boolean }>`
  font-size: 14px;
  font-weight: 400;
  grid-area: Percent;
  color: ${(props) => (props.$isPositive ? "#01F1E3" : "#FE2264")};
`;

export { Wrapper, CardContainer, CoinIcon, CoinName, CoinPrice, CoinPercent };
