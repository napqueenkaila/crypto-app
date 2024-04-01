import { PercentChangeDiv } from "@/app/styling/components/Table/styled.PercentChange";
import { ArrowIcon } from "../SVGs/ArrowIcon";

interface Props {
    percentChange: number;
}

const PercentChange = ({ percentChange }: Props) => {
    const $isPositive = percentChange >= 0 ? true : false;

    return (
      <PercentChangeDiv
        $isPositive={$isPositive}
      >
        <ArrowIcon isPositive={$isPositive} />
        {percentChange.toFixed(2)}%
      </PercentChangeDiv>
    );
 };

export default PercentChange;