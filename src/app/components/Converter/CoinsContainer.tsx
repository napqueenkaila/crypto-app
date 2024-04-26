import { Dispatch, SetStateAction, useState } from "react";
import styled from "styled-components";
import { useAppSelector } from "@/app/redux/hooks";
import { selectCurrency } from "@/app/redux/features/currencySlice";
import CoinInput from "./CoinInput";
import CoinOutput from "./CoinOutput";

interface Coin {
  id: string;
  name: string;
  image: string;
  symbol: string;
  currentPrice: Record<string, number>;
}

const ConverterValueDiv = styled.div`
  background-color: #191932;
  padding: 24px;
  border: 1px red solid;
`;

const CoinsContainer = ({
  fromCoinData,
  toCoinData,
  setFromCoin,
  setToCoin,
}: {
  fromCoinData: Coin;
  toCoinData: Coin;
  setFromCoin: Dispatch<SetStateAction<string>>;
  setToCoin: Dispatch<SetStateAction<string>>;
}) => {
  const { currency } = useAppSelector(selectCurrency);
  const fromPrice = fromCoinData.currentPrice[currency];
  const toPrice = toCoinData.currentPrice[currency];
  const [fromQuantity, setFromQuantity] = useState(1);
  const [toQuantity, setToQuantity] = useState(
    Number((fromQuantity * (fromPrice / toPrice)).toFixed(2))
  );

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
          type="from"
          coinData={fromCoinData}
          setCoin={setFromCoin}
          quantity={fromQuantity}
          handleQuantityChange={handleQuantityChange}
        />
        <CoinOutput coinData={fromCoinData} />
      </ConverterValueDiv>
      <ConverterValueDiv>
        <CoinInput
          type="to"
          coinData={toCoinData}
          setCoin={setToCoin}
          quantity={toQuantity}
          handleQuantityChange={handleQuantityChange}
        />
        <CoinOutput coinData={toCoinData} />
      </ConverterValueDiv>
    </>
  );
};
export default CoinsContainer;
