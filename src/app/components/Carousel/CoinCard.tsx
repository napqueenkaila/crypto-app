import { useAppDispatch, useAppSelector } from "@/app/redux/hooks";
import {
  selectCoinOne,
  selectCoinTwo,
  setCoinOne,
  setCoinTwo,
} from "@/app/redux/features/selectedCoinsSlice";
import {
  Wrapper,
  CardContainer,
  CoinIcon,
  CoinName,
  CoinPrice,
  CoinPercent,
} from "@/app/styling/components/Carousel/styled.CoinCard";
import { ArrowIcon } from "../SVGs";
import { formatNumberWithCommas } from "@/app/utils";
import { CarouselData } from "@/app/types/interfaces/api.interfaces";

const CoinCard = ({ coinData }: { coinData: CarouselData }) => {
  const coinOneSelected = useAppSelector(selectCoinOne);
  const coinTwoSelected = useAppSelector(selectCoinTwo);
  const emptySelectedCoin = { id: "", name: "", symbol: "" };
  const $isPositive = coinData.price_change_percentage_24h >= 0 ? true : false;
  const $isSelected =
    coinData.id === coinOneSelected.id || coinData.id === coinTwoSelected?.id;
  const dispatch = useAppDispatch();

  const handleSelect = (selected: {
    id: string;
    name: string;
    symbol: string;
  }) => {
    if (selected.id === coinOneSelected.id && coinTwoSelected.id !== "") {
      // unselect coinOne if clicked and coinTwo is NOT empty
      dispatch(setCoinOne(coinTwoSelected));
      dispatch(setCoinTwo(emptySelectedCoin));
    } else if (
      selected.id === coinTwoSelected?.id &&
      coinOneSelected.id !== ""
    ) {
      // Unselect coinTwo if clicked and coinOne is NOT empty
      dispatch(setCoinTwo(emptySelectedCoin));
    } else if (coinTwoSelected.id === "") {
      if (selected.id === coinOneSelected.id) {
        dispatch(setCoinOne(selected));
      } else {
        // Set coinTwo if it's empty
        dispatch(setCoinTwo(selected));
      }
    } else if (coinOneSelected.id !== "" && coinTwoSelected.id !== "") {
      dispatch(setCoinTwo(selected));
    } else {
      // Swap coins
      dispatch(setCoinOne(selected));
      dispatch(setCoinTwo(coinOneSelected));
    }
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
