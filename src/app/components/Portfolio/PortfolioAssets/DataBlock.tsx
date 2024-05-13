import styled from "styled-components";
import { ArrowIcon } from "../../SVGs";

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
  color: ${(props) => props.$color}
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

const DataBlock = ({
  coinData,
  title,
  isPercent,
  hasPercentBar,
}: {
  coinData: number | string;
  title: string;
  isPercent: boolean;
  hasPercentBar: boolean;
}) => {
  const getColor = () => {
    if (!isPercent) {
      return "#FFFFFF";
    } else if (isPercent && Number(coinData) >= 0) {
      return "#01f1e3";
    } else {
      return "#FE2264";
    }
  };

  return (
    <DataContainer>
      <div>
        <Data $color={getColor()}>
          {isPercent && !hasPercentBar && (
            <ArrowIcon isPositive={Number(coinData) > 0 ? true : false} />
          )}
          {Number(coinData) < 0 ? Number(coinData) * -1 : coinData}
          {isPercent && "%"}
        </Data>
        {hasPercentBar && (
          <PercentageBar>
            <Percent $percent={Number(coinData)} />
          </PercentageBar>
        )}
      </div>
      <DataBlockTitle>{title}</DataBlockTitle>
    </DataContainer>
  );
};
export default DataBlock;
