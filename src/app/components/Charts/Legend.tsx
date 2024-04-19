import styled from "styled-components";
import { useAppSelector } from "@/app/redux/hooks";
import { selectCurrency } from "@/app/redux/features/currencySlice";
import { formatCompactCurrency } from "@/app/utils";

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
  todaysDate: string;
  coinOne: { [key: string]: string };
  legendValue: number;
};

const Legend = ({
  chartType,
  todaysDate,
  coinOne,
  legendValue,
}: Props): JSX.Element => {
  const { currency } = useAppSelector(selectCurrency);

  return (
    <LegendWrapper>
      <Title>
        {chartType === "line"
          ? `${coinOne.name} (${coinOne.symbol.toUpperCase()})`
          : "Volume 24h"}
      </Title>
      <Value>{formatCompactCurrency(legendValue, currency)}</Value>
      <Date>{todaysDate}</Date>
    </LegendWrapper>
  );
};

export default Legend;
