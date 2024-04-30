"use client";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { useAppSelector } from "../redux/hooks";
import { selectCurrency } from "../redux/features/currencySlice";
import { selectConverterCoins } from "../redux/features/converterCoinsSlice";
import { TableData, useGetTableDataQuery } from "../redux/features/api";
import CoinsContainer from "../components/Converter/CoinsContainer";
import ChartContainer from "../components/Converter/ChartContainer";

const Container = styled.div`
  width: 90vw;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

export default function Converter() {
  const getTodaysDate = () => {
    const date = Date.now();
    return new Intl.DateTimeFormat("en-US", {
      dateStyle: "short",
      timeStyle: "short",
    }).format(date);
  };

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
      <div>
        <div>Online currency converter</div>
        <div>{getTodaysDate()}</div>
      </div>
      {isSuccess && fromCoin !== undefined && toCoin !== undefined ? (
        <>
          <CoinsContainer
            fromCoin={fromCoin}
            toCoin={toCoin}
            setFromCoin={setFromCoin}
            setToCoin={setToCoin}
          />
          <ChartContainer fromCoin={fromCoin} toCoin={toCoin} />
        </>
      ) : null}
    </Container>
  );
}
