import Link from "next/link";
import { usePathname } from "next/navigation";
import styled from "styled-components";

const ButtonWrapper = styled.div`
  width: 40%;
  margin: 20px 100px;
`;

const StyledButton = styled.button`
  background-color: #232336;
  width: 50%;
  padding: 12px 32px;
  border-radius: 6px;
  border: none;
  color: #fff;
  font-size: 16px;
  &.active {
    background-color: #6161d680;
    font-weight: 500;
  }
`;

const SliderButton = () => {
  const pathname = usePathname();

  return (
    <ButtonWrapper>
      <Link href="/">
        <StyledButton className={`${pathname === "/" ? "active" : ""} `}>
          Coins
        </StyledButton>
      </Link>
      <Link href="/converter">
        <StyledButton
          className={`${pathname === "/converter" ? "active" : ""} `}
        >
          Converter
        </StyledButton>
      </Link>
    </ButtonWrapper>
  );
};
export default SliderButton;
