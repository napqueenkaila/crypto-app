import styled from "styled-components";

const LegendWrapper = styled.div`
  padding-left: 25px;
`;

const Title = styled.p`
  color: ${({ theme }) => theme.charts.legend.legendTitleColor};
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  margin-bottom: 10px;
`;

const Value = styled.p`
  color: ${({ theme }) => theme.charts.legend.legendValueColor};
  font-weight: 700;
  font-size: 28px;
  line-height: 28px;
`;

const Date = styled.p`
  color: ${({ theme }) => theme.charts.legend.legendDateColor};
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;

export { LegendWrapper, Title, Value, Date };
