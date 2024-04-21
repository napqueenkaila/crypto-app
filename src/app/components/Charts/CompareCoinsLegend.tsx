import { useAppSelector } from "@/app/redux/hooks";
import { selectCurrency } from "@/app/redux/features/currencySlice";
import {
  Container,
  CoinContainer,
  ColorBox,
} from "@/app/styling/components/Charts/styled.CompareCoinsLegend";
import { formatCompactCurrency } from "@/app/utils";

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
