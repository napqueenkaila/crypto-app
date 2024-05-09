import { useAppSelector } from "@/app/redux/hooks";
import { selectCurrency } from "@/app/redux/features/currencySlice";
import { selectCompareCoins } from "@/app/redux/features/selectedCoinsSlice";
import {
  LegendWrapper,
  Title,
  Value,
  Date,
} from "@/app/styling/components/Charts/styled.Legend";
import { formatCompactCurrency } from "@/app/utils";
import { LegendProps } from "@/app/types/interfaces/charts.interfaces";

const Legend = ({
  chartType,
  coinOne,
  legendValue,
  legendDate,
}: LegendProps): JSX.Element => {
  const { currency } = useAppSelector(selectCurrency);
  const compareCoins = useAppSelector(selectCompareCoins);
  const titleText = `${coinOne.name} (${coinOne.symbol.toUpperCase()})`;

  const getLegendJSX = () => {
    if (chartType === "line" && compareCoins) {
      return <Value>{legendDate}</Value>;
    } else if (chartType === "line" && !compareCoins) {
      return (
        <>
          <Title>{titleText}</Title>
          <Value>{formatCompactCurrency(legendValue, currency)}</Value>
          <Date>{legendDate}</Date>
        </>
      );
    } else if (chartType === "bar" && compareCoins) {
      return (
        <>
          <Value>Volume 24h</Value> <Date>{legendDate}</Date>
        </>
      );
    } else if (chartType === "bar" && !compareCoins) {
      return (
        <>
          <Title>Volume 24h</Title>
          <Value>{formatCompactCurrency(legendValue, currency)}</Value>
          <Date>{legendDate}</Date>
        </>
      );
    }
  };

  return <LegendWrapper>{getLegendJSX()}</LegendWrapper>;
};

export default Legend;
