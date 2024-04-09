import Link from "next/link";
import { usePathname } from "next/navigation";
import styled from "styled-components";

const LinkWrapper = styled.div`
  width: 40%;
  margin: 20px 100px;
  background-color: ${({theme}) => theme.sliderButton.containerBackground};
  display: flex;
  border-radius: 6px;
`;

const StyledLink = styled(Link)`
  padding: 12px 32px;
  background-color: ${({theme}) => theme.sliderButton.backgroundColor};
  text-align: center;
  width: 50%;
  border-radius: 6px;
  color: ${({theme}) => theme.sliderButton.inactiveTextColor};
  font-size: 16px;
  text-decoration: none;
  &.active {
    background-color: ${({theme}) => theme.sliderButton.activeBackgroundColor};
    font-weight: 500;
    color: ${({theme}) => theme.sliderButton.activeTextColor}
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
