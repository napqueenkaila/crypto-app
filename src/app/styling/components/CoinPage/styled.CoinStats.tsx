import styled from "styled-components";

const StatsContainer = styled.div`
  grid-area: stats;
  background-color: ${({ theme }) => theme.coinPage.blockBackgroundColor};
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const StatDiv = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

const Name = styled.div`
  font-size: 16px;
  font-weight: 400;
  white-space: pre-wrap;
`;

const Value = styled.div`
  font-weight: 500;
  font-size: 20px;
`;

const PercentageBarDiv = styled.div`
  width: 100%;
  height: 6px;
  background-color: #d1d1d1;
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

const ValuesDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledValues = styled.div`
  font-size: 12px;
`;

export {
  StatsContainer,
  StatDiv,
  Name,
  Value,
  PercentageBarDiv,
  Percent,
  ValuesDiv,
  StyledValues,
};
