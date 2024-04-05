import { ArrowIcon } from "../SVGs";
import {
  Wrapper,
  CardContainer,
  CoinIcon,
  CoinName,
  CoinPrice,
  CoinPercent,
} from "@/app/styling/components/Carousel/styled.CoinCard";

interface CarouselData {
  id: string;
  name: string;
  symbol: string;
  image: string;
  current_price: number;
  price_change_percentage_24h: number;
}

const CoinCard = ({ coinData }: { coinData: CarouselData }) => {
  const $isPositive = coinData.price_change_percentage_24h >= 0 ? true : false;

  return (
    <Wrapper>
      <CardContainer>
        <CoinIcon src={coinData.image} alt="" width={32} height={32} />
        <CoinName>
          {coinData.name} ({coinData.symbol.toUpperCase()})
        </CoinName>
        <CoinPrice>{coinData.current_price} USD</CoinPrice>
        <CoinPercent $isPositive={$isPositive}>
          <ArrowIcon isPositive={$isPositive} />
          {!$isPositive
            ? coinData.price_change_percentage_24h * -1
            : coinData.price_change_percentage_24h.toFixed(2)}
          %
        </CoinPercent>
      </CardContainer>
    </Wrapper>
  );
};

export default CoinCard;
