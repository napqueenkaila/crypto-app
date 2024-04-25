"use client";
import { useState } from "react";
import styled from "styled-components";
import { useGetConverterCoinsDataQuery } from "../redux/features/api";
import CoinInput from "../components/Converter/CoinInput";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

const ConverterValueDiv = styled.div`
  background-color: #191932;
  padding: 24px;
`;

export default function Converter() {
  const [fromCoin, setFromCoin] = useState("bitcoin");
  const [toCoin, setToCoin] = useState("ethereum");
  const [fromQuantity, setFromQuantity] = useState(1);
  const [toQuantity, setToQuantity] = useState(1);
  const { data: fromCoinData, isSuccess: fromIsSuccess } =
    useGetConverterCoinsDataQuery(fromCoin);
  const { data: toCoinData, isSuccess: toIsSuccess } =
    useGetConverterCoinsDataQuery(toCoin);

  return (
    <Container>
      <ConverterValueDiv>
        {fromIsSuccess ? (
          <CoinInput
            coinData={fromCoinData}
            setCoin={setFromCoin}
            quantity={fromQuantity}
            setQuantity={setFromQuantity}
          />
        ) : null}
      </ConverterValueDiv>
      <ConverterValueDiv>
        {toIsSuccess ? (
          <CoinInput
            coinData={toCoinData}
            setCoin={setToCoin}
            quantity={toQuantity}
            setQuantity={setToQuantity}
          />
        ) : null}
      </ConverterValueDiv>
    </Container>
  );
}
