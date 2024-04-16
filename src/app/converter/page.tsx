"use client";
import { useState } from "react";
import styled from "styled-components";
import { useAppSelector } from "../redux/hooks";
import { selectCurrency } from "../redux/features/currencySlice";
import { useGetCarouselDataQuery } from "../redux/features/api";
import SelectWithSearch from "../components/Converter/SelectWithSearch";

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
  const { currency } = useAppSelector(selectCurrency);
  const [fromCoin, setFromCoin] = useState("bitcoin");
  const [toCoin, setToCoin] = useState("ethereum");
  const { data: options } = useGetCarouselDataQuery(currency);

  const mappedOptions = options?.map((option) => ({
    name: option.name,
    value: option.id,
    image: option.image,
  }));

  return (
    <Container>
      <ConverterValueDiv>
        <SelectWithSearch
          options={mappedOptions}
          coin={fromCoin}
          setCoin={setFromCoin}
        />
      </ConverterValueDiv>
      <ConverterValueDiv>
        <SelectWithSearch
          options={mappedOptions}
          coin={toCoin}
          setCoin={setToCoin}
        />
      </ConverterValueDiv>
    </Container>
  );
}
