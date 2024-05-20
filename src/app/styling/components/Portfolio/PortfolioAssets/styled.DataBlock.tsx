import styled from "styled-components";

const DataContainer = styled.div`
  border: 1px solid ${({ theme }) => theme.portfolio.assets.dataBlockBorder};
  padding: 15px 10px;
  border-radius: 8px;
  background-color: ${({ theme }) =>
    theme.portfolio.assets.dataBlockBackground};
`;

const DataBlockTitle = styled.div`
  color: ${({ theme }) => theme.portfolio.assets.dataBlockTitle};
  font-size: 14px;
`;

const Data = styled.div<{ $color: string }>`
  font-size: 20px;
  font-weight: 500;
  color: ${(props) => props.$color};
`;

const PercentageBar = styled.div`
  width: 250px;
  height: 6px;
  border-radius: 2px;
  background-color: #00b1a780;
`;

const Percent = styled.div<{ $percent: number }>`
  height: 100%;
  width: ${(props) => `${props.$percent}%`};
  background-color: #00b1a7;
`;

export { DataContainer, DataBlockTitle, Data, PercentageBar, Percent };
