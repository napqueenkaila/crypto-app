import {
  PercentageBarDiv,
  Percent,
  StyledValues,
  ValuesDiv,
} from "@/app/styling/components/Table/styled.PercentBar";
import { compactCurrencyFormatter } from "@/app/utils";

interface Props {
  value1: number;
  value2: number;
}

const PercentBar = ({ value1, value2 }: Props) => {
  return (
    <div>
      <ValuesDiv>
        <StyledValues>{compactCurrencyFormatter.format(value1)}</StyledValues>
        <StyledValues>{compactCurrencyFormatter.format(value2)}</StyledValues>
      </ValuesDiv>
      <PercentageBarDiv>
        <Percent $percent={(value1 / value2) * 100} />
      </PercentageBarDiv>
    </div>
  );
};

export default PercentBar;
