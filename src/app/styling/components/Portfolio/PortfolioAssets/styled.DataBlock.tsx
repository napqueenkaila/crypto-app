import styled from "styled-components";

const DataContainer = styled.div`
  border: 1px solid #2d2d51;
  padding: 15px 10px;
  border-radius: 8px;
  background-color: #191925;
`;

const DataBlockTitle = styled.div`
  color: #d1d1d1;
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
  background-color: #01f1e380;
`;

const Percent = styled.div<{ $percent: number }>`
  height: 100%;
  width: ${(props) => `${props.$percent}%`};
  background-color: #01f1e3;
`;

export { DataContainer, DataBlockTitle, Data, PercentageBar, Percent };
