import styled from "styled-components";

const Bar = styled.div`
  background-color: ${({theme}) => theme.charts.rangeBar.rangeBackgroundColor};
  border-radius: 6px;
  max-width: 50%;
  min-width: fit-content;
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
  color: ${({ theme }) => theme.charts.rangeBar.rangeTextColor};
  padding: 8px 20px;
  border: 1px solid transparent;
  border-radius: 6px;
  &:hover {
    cursor: pointer;
  }
  ${StyledInput}:checked + & {
    color: ${({ theme }) => theme.charts.rangeBar.selectedRangeTextColor};
    font-weight: 500;
    box-shadow: 4px 4px 20px 8px #7878fa26;
    background-color: ${({ theme }) =>
      theme.charts.rangeBar.selectedRangeBgColor};
  }
`;

export { Bar, RangeDiv, StyledInput, StyledLabel };
