import styled from "styled-components";

const Bar = styled.div`
  background-color: #232336;
  border-radius: 6px;
  width: 30%;
  padding: 4px;
  display: flex;
  justify-content: space-around;
  margin: 20px 0;
`;

const RangeDiv = styled.div`
padding: 4px;
`;

const StyledInput = styled.input`
  opacity: 0;
  position: absolute;
`;

const StyledLabel = styled.label`
  font-size: 14px;
  color: #a7a7cc;
  padding: 8px 20px;
  border: 1px solid transparent;
  border-radius: 6px;
  &:hover {
    cursor: pointer;
  }
  ${StyledInput}:checked + & {
    color: #e4e4f0;
    font-weight: 500;
    box-shadow: 4px 4px 20px 8px #7878fa26;
    background-color: #6161d680;
  }
`;

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
