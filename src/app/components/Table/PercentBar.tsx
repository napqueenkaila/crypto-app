import { useAppSelector } from "@/app/redux/hooks";
import { selectCurrency } from "@/app/redux/features/currencySlice";
import {
  PercentageBarDiv,
  Percent,
  StyledValues,
  ValuesDiv,
} from "@/app/styling/components/Table/styled.PercentBar";
import { formatCompactCurrency } from "@/app/utils";

interface Props {
  value1: number;
  value2: number;
}

const PercentBar = ({ value1, value2 }: Props) => {
  const { currency } = useAppSelector(selectCurrency);

  return (
    <div>
      <ValuesDiv>
        <StyledValues>{formatCompactCurrency(value1, currency)}</StyledValues>
        <StyledValues>{formatCompactCurrency(value2, currency)}</StyledValues>
      </ValuesDiv>
      <PercentageBarDiv>
        <Percent $percent={(value1 / value2) * 100} />
      </PercentageBarDiv>
    </div>
  );
};

export default PercentBar;
