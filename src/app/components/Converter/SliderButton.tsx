import Link from "next/link";
import { usePathname } from "next/navigation";
import styled from "styled-components";

const LinkWrapper = styled.div`
  width: 40%;
  margin: 20px 100px;
  background-color: #191925;
  display: flex;
`;

const StyledLink = styled(Link)`
  padding: 12px 32px;
  background-color: #232336;
  text-align: center;
  width: 50%;
  border-radius: 6px;
  color: #fff;
  font-size: 16px;
  text-decoration: none;
  &.active {
    background-color: #6161d680;
    font-weight: 500;
  }
`;

const SliderButton = () => {
  const pathname = usePathname();

  return (
    <LinkWrapper>
      <StyledLink href="/" className={`${pathname === "/" ? "active" : ""} `}>
        Coins
      </StyledLink>
      <StyledLink
        href="/converter"
        className={`${pathname === "/converter" ? "active" : ""} `}
      >
        Converter
      </StyledLink>
    </LinkWrapper>
  );
};
export default SliderButton;
