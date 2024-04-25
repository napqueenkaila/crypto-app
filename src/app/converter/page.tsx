"use client";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { useAppSelector } from "../redux/hooks";
import { selectCurrency } from "../redux/features/currencySlice";
import { useGetInitialConverterCoinsQuery } from "../redux/features/api";
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

interface Coin {
  name: string;
  id: string;
  image: string;
  currentPrice: number;
}

export default function Converter() {
  const { currency } = useAppSelector(selectCurrency);
  const { data, isSuccess } = useGetInitialConverterCoinsQuery(currency);
  const [fromCoin, setFromCoin] = useState<Coin>();
  const [toCoin, setToCoin] = useState<Coin>();

  useEffect(() => {
    if (isSuccess) {
      setFromCoin(data[0]);
      setToCoin(data[1]);
    }
  }, [isSuccess]);

  return (
    <Container>
      <ConverterValueDiv>
        {fromCoin !== undefined ? <CoinInput coin={fromCoin} /> : null}
      </ConverterValueDiv>
      <ConverterValueDiv>
        {toCoin !== undefined ? <CoinInput coin={toCoin} /> : null}
      </ConverterValueDiv>
    </Container>
  );
}
