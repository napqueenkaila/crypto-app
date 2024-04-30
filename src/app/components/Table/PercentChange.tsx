import { PercentChangeDiv } from "@/app/styling/components/Table/styled.PercentChange";
import { ArrowIcon } from "../SVGs/index";
import { PercentChangeProps } from "@/app/types/interfaces/table.interfaces";

const PercentChange = ({ percentChange }: PercentChangeProps) => {
  const $isPositive = percentChange >= 0 ? true : false;

  return (
    <PercentChangeDiv $isPositive={$isPositive}>
      <ArrowIcon isPositive={$isPositive} />
      {!$isPositive
        ? (percentChange * -1).toFixed(2)
        : percentChange?.toFixed(2)}
      %
    </PercentChangeDiv>
  );
};

export default PercentChange;
