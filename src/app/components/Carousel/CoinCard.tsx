import { ArrowIcon } from "../SVGs";
import {
  Wrapper,
  CardContainer,
  CoinIcon,
  CoinName,
  CoinPrice,
  CoinPercent,
} from "@/app/styling/components/Carousel/styled.CoinCard";
import { formatNumberWithCommas } from "@/app/utils";
import {
  selectCoinOne,
  setCoinOne,
} from "@/app/redux/features/selectedCoinsSlice";
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks";

interface CarouselData {
  id: string;
  name: string;
  symbol: string;
  image: string;
  current_price: number;
  price_change_percentage_24h: number;
}

const CoinCard = ({ coinData }: { coinData: CarouselData }) => {
  const coinOneSelected = useAppSelector(selectCoinOne);
  const $isPositive = coinData.price_change_percentage_24h >= 0 ? true : false;
  const $isSelected = coinData.id === coinOneSelected.id;
  const dispatch = useAppDispatch();
  const handleSelect = (selected: { [key: string]: string }) => {
    dispatch(setCoinOne(selected));
  };

  return (
    <Wrapper
      onClick={() =>
        handleSelect({
          id: coinData.id,
          name: coinData.name,
          symbol: coinData.symbol,
        })
      }
    >
      <CardContainer $isSelected={$isSelected}>
        <CoinIcon src={coinData.image} alt="" width={32} height={32} />
        <CoinName>
          {coinData.name} ({coinData.symbol.toUpperCase()})
        </CoinName>
        <CoinPrice>
          {formatNumberWithCommas(coinData.current_price)} USD
        </CoinPrice>
        <CoinPercent $isPositive={$isPositive}>
          <ArrowIcon isPositive={$isPositive} />
          {!$isPositive
            ? (coinData.price_change_percentage_24h * -1).toFixed(2)
            : coinData.price_change_percentage_24h.toFixed(2)}
          %
        </CoinPercent>
      </CardContainer>
    </Wrapper>
  );
};

export default CoinCard;
