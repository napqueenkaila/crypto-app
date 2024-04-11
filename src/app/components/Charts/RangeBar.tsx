import styled from "styled-components";

const Bar = styled.div`
  background-color: #232336;
  border-radius: 6px;
  width: 40%;
  padding: 4px;
  display: flex;
  justify-content: space-around;
  margin: 30px 0;
`;

const StyledInput = styled.input`
  opacity: 0;
`;

const StyledLabel = styled.label`
  &:hover {
    cursor: pointer;
  }
`;

const RangeBar = ({
  handleChange,
  ranges,
}: {
  handleChange: (e: any) => void;
  ranges: { value: string; days: number }[];
}) => {
  return (
    <Bar>
      {ranges.map((range) => (
        <StyledLabel onChange={handleChange} key={range.value} htmlFor="range">
          {range.value}
          <StyledInput
            type="radio"
            id={range.value}
            value={range.days}
            name="range"
          />
        </StyledLabel>
      ))}
    </Bar>
  );
};
export default RangeBar;
