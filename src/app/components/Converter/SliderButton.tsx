import { usePathname } from "next/navigation";
import {
  LinkWrapper,
  StyledLink,
} from "@/app/styling/components/Converter/styled.SliderButton";

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
