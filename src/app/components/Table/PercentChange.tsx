import Image from "next/image";
import { PercentChangeDiv } from "@/app/styling/components/Table/styled.PercentChange";

interface Props {
    percentChange: number;
}

const PercentChange = ({ percentChange }: Props) => {
    const $isPositive = percentChange >= 0 ? true : false;

    return (
      <PercentChangeDiv
        $isPositive={$isPositive}
      >
        <Image src={$isPositive ? "GreenArrow.svg" : "RedArrow.svg"} alt="" width={10} height={16} />
        {percentChange.toFixed(2)}%
      </PercentChangeDiv>
    );
 };

export default PercentChange;