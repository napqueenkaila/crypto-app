import { SetStateAction, useState } from "react";
import CoinInput from "./CoinInput";
import CoinOutput from "./CoinOutput";
import { SwapIcon } from "../SVGs";
import { CoinsContainerProps } from "@/app/types/interfaces/converter.interfaces";
import {
  Container,
  ConverterValueDiv,
  StyledBreak,
} from "@/app/styling/components/Converter/styled.CoinsContainer";

const CoinsContainer = ({
  fromCoin,
  toCoin,
  setFromCoin,
  setToCoin,
}: CoinsContainerProps) => {
  const [fromQuantity, setFromQuantity] = useState(0);
  const [toQuantity, setToQuantity] = useState(0);

  const calculateQuantity = (
    priceOne: number,
    priceTwo: number,
    quantity: number
  ) => {
    return Number((quantity * (priceOne / priceTwo)).toFixed(2));
  };

  const handleFromQuantityChange = (e: {
    target: { value: SetStateAction<number> };
  }) => {
    setFromQuantity(e.target.value);
    const newToQuantity = calculateQuantity(
      fromCoin.current_price,
      toCoin.current_price,
      Number(e.target.value)
    );
    setToQuantity(newToQuantity);
  };

  const handleToQuantityChange = (e: {
    target: { value: SetStateAction<number> };
  }) => {
    setToQuantity(e.target.value);
    const newFromQuantity = calculateQuantity(
      toCoin.current_price,
      fromCoin.current_price,
      Number(e.target.value)
    );
    setFromQuantity(newFromQuantity);
  };

  const resetQuantities = () => {
    setToQuantity(0);
    setFromQuantity(0);
  };

  const handleSwapCoins = () => {
    setFromCoin(toCoin);
    setToCoin(fromCoin);
    setFromQuantity(toQuantity);
    setToQuantity(fromQuantity);
  };

  return (
    <Container>
      <ConverterValueDiv>
        <CoinInput
          text="You sell"
          coinData={fromCoin}
          setCoin={setFromCoin}
          quantity={fromQuantity}
          resetQuantities={resetQuantities}
          handleQuantityChange={handleFromQuantityChange}
        />
        <StyledBreak />
        <CoinOutput coinData={fromCoin} />
      </ConverterValueDiv>
      <SwapIcon onClick={handleSwapCoins} />
      <ConverterValueDiv>
        <CoinInput
          text="You buy"
          coinData={toCoin}
          setCoin={setToCoin}
          quantity={toQuantity}
          resetQuantities={resetQuantities}
          handleQuantityChange={handleToQuantityChange}
        />
        <StyledBreak />
        <CoinOutput coinData={toCoin} />
      </ConverterValueDiv>
    </Container>
  );
};
export default CoinsContainer;
