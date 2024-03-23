import styled from "styled-components";
import { compactCurrencyFormatter } from "@/app/utils";

interface Props {
  value1: number;
  value2: number;
}

const PercentageBarDiv = styled.div`
  width: 200px;
  height: 6px;
  border-radius: 2px;
  background-color: #c2772180;
`;

interface PercentProps {
  $percent?: number | string;
}

const Percent = styled.div<PercentProps>`
  height: 100%;
  width: ${(props) => `${props.$percent}%`};
  background-color: #c27721;
`;

const StyledValues = styled.div`
  font-size: 12px;
`;
const ValuesDiv = styled.div`
display: flex;
justify-content: space-between;
`;

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
