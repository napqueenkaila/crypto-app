import { ArrowIcon } from "../../SVGs";
import {
  DataContainer,
  DataBlockTitle,
  Data,
  PercentageBar,
  Percent,
} from "@/app/styling/components/Portfolio/PortfolioAssets/styled.DataBlock";

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
