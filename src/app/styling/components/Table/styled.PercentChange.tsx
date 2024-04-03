import styled from "styled-components";

export const PercentChangeDiv = styled.div<{ $isPositive: boolean }>`
  color: ${(props) => (props.$isPositive ? "#01F1E3" : "#FE2264")};
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 5px;
`;