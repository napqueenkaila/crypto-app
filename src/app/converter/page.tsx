"use client";
import styled from "styled-components";

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


  return (
    <Container>
      <ConverterValueDiv>
      </ConverterValueDiv>
      <ConverterValueDiv>

      </ConverterValueDiv>
    </Container>
  );
}
