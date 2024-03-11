import styled from "styled-components";

const LegendWrapper = styled.div`
  position: absolute;
  padding-left: 35px;
`;

const Title = styled.p`
  color: rgba(209, 209, 209, 1);
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  margin-bottom: 24px;
`;

const Value = styled.p`
  color: rgba(255, 255, 255, 1);
  font-weight: 700;
  font-size: 28px;
  line-height: 28px;
`;

const Date = styled.p`
  color: rgba(185, 185, 186, 1);
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;

type Props = {
    chartType: string;
}

const Legend = ({chartType}: Props): JSX.Element => {
  return (
    <LegendWrapper>
      <Title>{chartType === "line" ? "Bitcoin" : "Volume 24h"}</Title>
      <Value>$13.431 mln</Value>
      <Date>September 29, 2023</Date>
    </LegendWrapper>
  );
};

export default Legend;
