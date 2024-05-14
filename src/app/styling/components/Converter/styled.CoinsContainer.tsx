import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
  margin: 10px 50px;
  gap: 35px;
`;

const ConverterValueDiv = styled.div`
  background-color: #191932;
  padding: 24px;
  width: 50%;
  border-radius: 16px;
`;

const StyledBreak = styled.div`
  width: 100%;
  height: 2px;
  background-color: #ffffff;
`;

export { Container, ConverterValueDiv, StyledBreak };
