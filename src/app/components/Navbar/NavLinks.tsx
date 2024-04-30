import { usePathname } from "next/navigation";
import {
  LinkContainer,
  StyledLink,
} from "@/app/styling/components/Navbar/styled.navbar";
import { HomeIcon, PortfolioIcon } from "../SVGs";

const NavLinks = ({ darkMode }: { darkMode: boolean }) => {
  const pathname = usePathname();

  return (
    <LinkContainer>
      <StyledLink href="/" className={`${pathname === "/" ? "active" : ""}`}>
        <HomeIcon
          darkMode={darkMode}
          active={pathname === "/" ? true : false}
        />
        Home
      </StyledLink>
      <StyledLink
        href="/portfolio"
        className={`${pathname === "/portfolio" ? "active" : ""}`}
      >
        <PortfolioIcon
          darkMode={darkMode}
          active={pathname === "/portfolio" ? true : false}
        />
        Portfolio
      </StyledLink>
    </LinkContainer>
  );
};
export default NavLinks;
