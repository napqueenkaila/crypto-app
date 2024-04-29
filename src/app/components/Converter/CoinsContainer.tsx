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

  const handleQuantityChange = (
    e: { target: { value: SetStateAction<number> } },
    type: string
  ) => {
    if (type == "from" && fromPrice !== undefined && toPrice !== undefined) {
      setFromQuantity(e.target.value);
      const newQuantity = calculateQuantity(fromPrice, toPrice, fromQuantity);
      setToQuantity(newQuantity);
    } else if (
      type === "to" &&
      toPrice !== undefined &&
      fromPrice !== undefined
    ) {
      setToQuantity(e.target.value);
      const newQuantity = calculateQuantity(toPrice, fromPrice, toQuantity);
      setFromQuantity(newQuantity);
    }
  };

  return (
    <>
      <ConverterValueDiv>
        <CoinInput
          coinData={fromCoin}
          setCoin={setFromCoin}
          quantity={fromQuantity}
          handleQuantityChange={handleQuantityChange}
        />
        <CoinOutput coinData={fromCoin} />
      </ConverterValueDiv>
      <ConverterValueDiv>
        <CoinInput
          coinData={toCoin}
          setCoin={setToCoin}
          quantity={toQuantity}
          handleQuantityChange={handleQuantityChange}
        />
        <CoinOutput coinData={toCoin} />
      </ConverterValueDiv>
    </>
  );
};
export default CoinsContainer;
