import styled from "styled-components";
import { useAppSelector } from "@/app/redux/hooks";
import { selectCurrency } from "@/app/redux/features/currencySlice";
import { formatCompactCurrency } from "@/app/utils";

const Container = styled.div`
  display: flex;
  justify-content: space-around;
`;

const CoinContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #d1d1d1;
  font-size: 14px;
`;

const ColorBox = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 2px;
  background-color: ${(props) => props.color};
`;

const CompareCoinsLegend = ({
  coinOne,
  coinTwo,
  legendValueOne,
  legendValueTwo,
}: {
  coinOne: string;
  coinTwo: string;
  legendValueOne: number;
  legendValueTwo: number;
}) => {
  const { currency } = useAppSelector(selectCurrency);
  return (
    <Container>
      <CoinContainer>
        <ColorBox color="#7878fa" />
        <div>{coinOne}</div>
        <div>{formatCompactCurrency(legendValueOne, currency)}</div>
      </CoinContainer>
      <CoinContainer>
        <ColorBox color="#D878FA" />
        <div>{coinTwo}</div>
        <div>{formatCompactCurrency(legendValueTwo, currency)}</div>
      </CoinContainer>
    </Container>
  );
};
export default CompareCoinsLegend;
