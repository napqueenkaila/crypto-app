import {
  Bar,
  RangeDiv,
  StyledInput,
  StyledLabel,
} from "@/app/styling/components/Charts/styled.RangeBar";

const RangeBar = ({
  handleChange,
  selectedDays,
}: {
  handleChange: (e: any) => void;
  selectedDays: number;
}) => {
  const ranges = ["1D", "7D", "14D", "1M", "1Y"];
  const getRangeValue = (range: string) => {
    let rangeValue;
    switch (range) {
      case "1D":
        rangeValue = 1;
        break;
      case "7D":
        rangeValue = 7;
        break;
      case "14D":
        rangeValue = 14;
        break;
      case "1M":
        rangeValue = 30;
        break;
      case "1Y":
        rangeValue = 365;
        break;
    }
    return rangeValue;
  };

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
