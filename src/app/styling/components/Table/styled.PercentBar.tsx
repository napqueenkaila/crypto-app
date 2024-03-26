import styled from "styled-components";

export const PercentageBarDiv = styled.div`
  max-width: 200px;
  height: 6px;
  border-radius: 2px;
  background-color: #c2772180;
`;

interface PercentProps {
  $percent?: number | string;
}

export const Percent = styled.div<PercentProps>`
  height: 100%;
  width: ${(props) => `${props.$percent}%`};
  background-color: #c27721;
`;

export const ValuesDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledValues = styled.div`
  font-size: 12px;
`;
