import { SetStateAction, useState } from "react";
import styled from "styled-components";
import CoinInput from "./CoinInput";
import CoinOutput from "./CoinOutput";
import { SwapIcon } from "../SVGs";
import { CoinsContainerProps } from "@/app/types/interfaces/converter.interfaces";

const Container = styled.div`
  display: flex;
  width: 100%;
  margin: 10px 50px;
  gap: 35px;
`;

const ConverterValueDiv = styled.div`
  background-color: #191932;
  padding: 24px;
  width: 50%;
  border-radius: 16px;
`;

const StyledBreak = styled.div`
  width: 100%;
  height: 2px;
  background-color: #fffFFF;
`;

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
        <StyledBreak/>
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
        <StyledBreak/>
        <CoinOutput coinData={toCoin} />
      </ConverterValueDiv>
    </Container>
  );
};
export default CoinsContainer;
