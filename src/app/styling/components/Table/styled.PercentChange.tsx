import styled from "styled-components";

export const PercentChangeDiv = styled.div<{ $isPositive: boolean }>`
  color: ${(props) => (props.$isPositive ? "#00B1A7" : "#FE2264")};
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 5px;
`;
