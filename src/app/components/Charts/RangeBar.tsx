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
  ranges,
}: {
  handleChange: (e: any) => void;
  ranges: { value: string; days: number }[];
}) => {
  return (
    <Bar>
      {ranges.map((range) => (
        <>
          <StyledInput
            type="radio"
            id={range.value}
            name="range"
            value={range.days}
            onChange={handleChange}
          />
          <StyledLabel key={range.value} htmlFor={range.value}>
            {range.value}
          </StyledLabel>
        </>
      ))}
    </Bar>
  );
};
export default RangeBar;
