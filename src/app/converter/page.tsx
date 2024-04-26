"use client";
import { useState } from "react";
import styled from "styled-components";
import { useGetConverterCoinsDataQuery } from "../redux/features/api";
import CoinsContainer from "../components/Converter/CoinsContainer";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

export default function Converter() {
  const [fromCoin, setFromCoin] = useState("bitcoin");
  const [toCoin, setToCoin] = useState("ethereum");

  const { data: fromCoinData, isSuccess: fromIsSuccess } =
    useGetConverterCoinsDataQuery(fromCoin);
  const { data: toCoinData, isSuccess: toIsSuccess } =
    useGetConverterCoinsDataQuery(toCoin);

  return (
    <Container>
      {fromIsSuccess && toIsSuccess ? (
        <CoinsContainer
          fromCoinData={fromCoinData}
          toCoinData={toCoinData}
          setFromCoin={setFromCoin}
          setToCoin={setToCoin}
        />
      ) : null}
    </Container>
  );
}
