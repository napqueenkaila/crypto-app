import styled from "styled-components";
import Image from "next/image";

const FlexGrowTwo = styled.div`
  flex-grow: 2;
`;
const PercentChangeDiv = styled(FlexGrowTwo)<{ $isPositive: boolean }>`
  color: ${(props) => (props.$isPositive ? "#01F1E3" : "#FE2264")};
  font-size: 14px;
  display: flex;
  align-items: center;
`;

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