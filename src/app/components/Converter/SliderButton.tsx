import Link from "next/link";
import styled from "styled-components";

const ButtonWrapper = styled.div`
  width: 40%;
`;

const StyledButton = styled.button`
  border: 3px red solid;
  width: 50%;
  background-color: #232336;
  padding: 12px 32px;
  border-radius: 6px;
  /* border: none; */
  color: #fff;
  font-size: 16px;
`;

//selected button styles:
// font-weight: 500;
// background-color: #6161D680;

const SliderButton = () => {
  return (
    <ButtonWrapper>
      <Link href="/">
        <StyledButton>Coins</StyledButton>
      </Link>
      <Link href="/converter">
        <StyledButton>Converter</StyledButton>
      </Link>
    </ButtonWrapper>
  );
};
export default SliderButton;
