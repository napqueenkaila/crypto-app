import { Dispatch, SetStateAction, useState } from "react";
import styled from "styled-components";
import { TableData } from "@/app/redux/features/api";
import CoinInput from "./CoinInput";
import CoinOutput from "./CoinOutput";

const ConverterValueDiv = styled.div`
  background-color: #191932;
  padding: 24px;
  border: 1px red solid;
`;

const CoinsContainer = ({
  fromCoin,
  toCoin,
  setFromCoin,
  setToCoin,
}: {
  fromCoin: TableData;
  toCoin: TableData;
  setFromCoin: Dispatch<SetStateAction<TableData>>;
  setToCoin: Dispatch<SetStateAction<TableData>>;
}) => {
  const [fromQuantity, setFromQuantity] = useState(0);
  const [toQuantity, setToQuantity] = useState(0);

  const calculateQuantity = (
    priceOne: number,
    priceTwo: number,
    quantity: number
  ) => {
    return quantity * (priceOne / priceTwo);
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
      fromCoin.current_price,
      toCoin.current_price,
      Number(e.target.value)
    );
    setFromQuantity(newFromQuantity);
  };

  return (
    <>
      <ConverterValueDiv>
        <CoinInput
          coinData={fromCoin}
          setCoin={setFromCoin}
          quantity={fromQuantity}
          handleQuantityChange={handleFromQuantityChange}
        />
        <CoinOutput coinData={fromCoin} />
      </ConverterValueDiv>
      <ConverterValueDiv>
        <CoinInput
          coinData={toCoin}
          setCoin={setToCoin}
          quantity={toQuantity}
          handleQuantityChange={handleToQuantityChange}
        />
        <CoinOutput coinData={toCoin} />
      </ConverterValueDiv>
    </>
  );
};
export default CoinsContainer;
