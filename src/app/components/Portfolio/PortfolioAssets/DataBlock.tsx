import styled from "styled-components";
import { ArrowIcon } from "../../SVGs";

const PercentageBar = styled.div`
  width: 250px;
  height: 6px;
  border-radius: 2px;
  background-color: #01f1e380;
`;

const Percent = styled.div<{ $percent: number }>`
  height: 100%;
  width: ${(props) => `${props.$percent}%`};
`;

const DataBlock = ({
  coinData,
  title,
  isPercent,
  hasPercentBar,
}: {
  coinData: string;
  title: string;
  isPercent: boolean;
  hasPercentBar: boolean;
}) => {
  return (
    <div>
      <div>
        <div>
          {isPercent && !hasPercentBar && (
            <ArrowIcon isPositive={Number(coinData) > 0 ? true : false} />
          )}
          {coinData}
          {isPercent && "%"}
        </div>
        {hasPercentBar && (
          <PercentageBar>
            <Percent $percent={Number(coinData)} />
          </PercentageBar>
        )}
      </div>
      <div>{title}</div>
    </div>
  );
};
export default DataBlock;
