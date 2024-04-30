import {
  Bar,
  RangeDiv,
  StyledInput,
  StyledLabel,
} from "@/app/styling/components/Charts/styled.RangeBar";
import { getRangeValue } from "./utils";
import { RangeBarProps } from "@/app/types/interfaces/charts.interfaces";

const RangeBar = ({ handleChange, selectedDays }: RangeBarProps) => {
  const ranges = ["1D", "7D", "14D", "1M", "1Y"];

  return (
    <Bar>
      {ranges.map((range) => {
        const value = getRangeValue(range);
        return (
          <RangeDiv key={range}>
            <StyledInput
              type="radio"
              id={range}
              name="range"
              value={value}
              onChange={handleChange}
              checked={selectedDays === value}
            />
            <StyledLabel htmlFor={range}>{range}</StyledLabel>
          </RangeDiv>
        );
      })}
    </Bar>
  );
};
export default RangeBar;
