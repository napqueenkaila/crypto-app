import styled from "styled-components";
import { useAppSelector } from "@/app/redux/hooks";
import { selectCurrency } from "@/app/redux/features/currencySlice";
import { formatCompactCurrency } from "@/app/utils";
import { selectCompareCoins } from "@/app/redux/features/selectedCoinsSlice";

const LegendWrapper = styled.div`
  padding-left: 25px;
`;

const Title = styled.p`
  color: ${({ theme }) => theme.charts.legendTitleColor};
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  margin-bottom: 10px;
`;

const Value = styled.p`
  color: ${({ theme }) => theme.charts.legendValueColor};
  font-weight: 700;
  font-size: 28px;
  line-height: 28px;
`;

const Date = styled.p`
  color: ${({ theme }) => theme.charts.legendDateColor};
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;

type Props = {
  chartType: string;
  coinOne: { [key: string]: string };
  legendValue: number;
  legendDate: string;
};

const Legend = ({
  chartType,
  coinOne,
  legendValue,
  legendDate
}: Props): JSX.Element => {
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
