import styled from "styled-components";

const DataBarContainer = styled.div`
  background: ${({ theme }) => theme.marketDataBar.backgroundColor};
  color: ${({ theme }) => theme.marketDataBar.textColor};
  display: flex;
  justify-content: space-around;
  gap: 20px;
  padding: 16px 72px;
`;

const DataDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const PercentageBarDiv = styled.div`
  width: 50px;
  height: 6px;
  background-color: #ffffff66;
  border-radius: 2px;
`;

interface PercentProps {
  $percent?: number | string;
}

const Percent = styled.div<PercentProps>`
  height: 100%;
  width: ${(props) => `${props.$percent}%`};
  background-color: ${(props) => props.color};
`;

export { DataBarContainer, DataDiv, PercentageBarDiv, Percent };