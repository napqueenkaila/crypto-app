import { usePathname } from "next/navigation";
import {
  LinkWrapper,
  StyledLink,
} from "@/app/styling/components/Converter/styled.SliderButton";
import { usePrefetch } from "@/app/redux/features/api";
import { useAppSelector } from "@/app/redux/hooks";
import { selectCurrency } from "@/app/redux/features/currencySlice";

const SliderButton = () => {
  const pathname = usePathname();
  const { currency } = useAppSelector(selectCurrency);
  const prefetchInitialCoins = usePrefetch("getInitialConverterCoins");

  return (
    <LinkWrapper>
      <StyledLink href="/" className={`${pathname === "/" ? "active" : ""} `}>
        Coins
      </StyledLink>
      <StyledLink
        href="/converter"
        className={`${pathname === "/converter" ? "active" : ""} `}
        onMouseEnter={() => prefetchInitialCoins(currency, { force: true })}
      >
        Converter
      </StyledLink>
    </LinkWrapper>
  );
};
export default SliderButton;
