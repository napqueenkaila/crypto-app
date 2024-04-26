import styled from "styled-components";
import Image from "next/image";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  &:hover {
    cursor: pointer;
  }
`;

const CardContainer = styled.div<{ $isSelected: boolean }>`
  background-color: ${({ theme, $isSelected }) =>
    $isSelected
      ? theme.carousel.selectedCardBackgroundColor
      : theme.carousel.cardBackgroundColor};
  border: 1px solid #7878ff9f;
  border-radius: 6px;
  width: 250px;
  padding: 16px;
  height: 78px;
  display: grid;
  grid-template-areas:
    "Icon Name Name"
    "Icon Price Percent";
  box-shadow: ${({ $isSelected }) =>
    $isSelected ? "4px 4px 20px 8px #7878fa26" : ""};
`;

const CoinIcon = styled(Image)`
  grid-area: Icon;
  place-self: center start;
  margin-right: 10px;
`;

const CoinName = styled.div`
  color: ${({ theme }) => theme.carousel.coinTextColor};
  font-size: 16px;
  font-weight: 500;
  grid-area: Name;
  place-self: center start;
`;

const CoinPrice = styled.div`
  color: ${({ theme }) => theme.carousel.priceTextColor};
  font-size: 14px;
  font-weight: 400;
  grid-area: Price;
  place-self: start;
`;

const CoinPercent = styled.div<{ $isPositive: boolean }>`
  font-size: 14px;
  font-weight: 400;
  grid-area: Percent;
  place-self: start;
  color: ${(props) => (props.$isPositive ? "#01F1E3" : "#FE2264")};
`;

export { Wrapper, CardContainer, CoinIcon, CoinName, CoinPrice, CoinPercent };
