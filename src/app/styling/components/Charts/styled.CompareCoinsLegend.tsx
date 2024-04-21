import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-around;
`;

const CoinContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: ${({theme}) => theme.charts.compareLegend.textColor};
  font-size: 14px;
`;

const ColorBox = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 2px;
  background-color: ${(props) => props.color};
`;

export { Container, CoinContainer, ColorBox };
