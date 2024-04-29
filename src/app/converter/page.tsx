"use client";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { useAppSelector } from "../redux/hooks";
import { selectCurrency } from "../redux/features/currencySlice";
import { selectConverterCoins } from "../redux/features/converterCoinsSlice";
import {
  TableData,
  useGetTableDataQuery,
} from "../redux/features/api";
import CoinsContainer from "../components/Converter/CoinsContainer";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

export default function Converter() {
  const { currency } = useAppSelector(selectCurrency);
  const page = 1;
  const { isSuccess } = useGetTableDataQuery({ page, currency });
  const converterData = useAppSelector(selectConverterCoins);

  const [fromCoin, setFromCoin] = useState<TableData>(converterData[0]);
  const [toCoin, setToCoin] = useState<TableData>(converterData[1]);

  useEffect(() => {
    if (isSuccess) {
      setFromCoin(converterData[0]);
      setToCoin(converterData[1]);
    }
  }, [isSuccess, converterData]);

  return (
    <Container>
      {isSuccess ? (
        <CoinsContainer
          fromCoin={fromCoin}
          toCoin={toCoin}
          setFromCoin={setFromCoin}
          setToCoin={setToCoin}
        />
      ) : null}
    </Container>
  );
}
