import styled from "styled-components";

const LegendWrapper = styled.div`
  position: absolute;
  padding-left: 35px;
  padding-top: 20px;
`;

const Title = styled.p`
  color: ${({ theme }) => theme.charts.legendTitleColor};
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  margin-bottom: 24px;
`;

const Value = styled.p`
  color: ${({theme}) => theme.charts.legendValueColor};
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
  selectedCoin: {id: string, name: string, symbol: string};
}

const Legend = ({ chartType, todaysDate, selectedCoin }: Props): JSX.Element => {
  return (
    <LegendWrapper>
      <Title>{chartType === "line" ? `${selectedCoin.name} (${selectedCoin.symbol.toUpperCase()})` : "Volume 24h"}</Title>
      <Value>$13.431 mln</Value>
      <Date>{todaysDate}</Date>
    </LegendWrapper>
  );
};

export default Legend;
