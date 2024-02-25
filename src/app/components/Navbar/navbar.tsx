import { ReactSVG } from "react-svg";
import { NavContainer,LinkContainer, StyledLink, SearchInput, CurrencyDiv, StyledSelect, StyledModeBtn } from "@/app/styling/components/styled.navbar";

type NavbarProps = {
  setDisplayMode: (val: string) => void;
};

const Navbar = (props: NavbarProps) => {
  const toggleDisplayMode = () => {
    if (localStorage.getItem("displayMode") === "dark") {
      localStorage.setItem("displayMode", "light");
      props.setDisplayMode("light");
    } else {
      localStorage.setItem("displayMode", "dark");
      props.setDisplayMode("dark");
    }
  };
  return (
    <NavContainer>
      <ReactSVG src="NavLogoDark.svg" />
      <LinkContainer>
        <StyledLink href={"/"}>
          <ReactSVG src="HomeIcon.svg" />
          Home
        </StyledLink>
        <StyledLink href={"/portfolio"}>
          <ReactSVG src="PortfolioIcon.svg" />
          Portfolio
        </StyledLink>
      </LinkContainer>
      <SearchInput type="text" placeholder="&#128270;  Search..." />
      <CurrencyDiv>
        <label>
          <ReactSVG src="DollarIcon.svg" />
        </label>
        <StyledSelect>
          <option value={"USD"}>USD</option>
          <option value={"GBP"}>GBP</option>
          <option value={"EUR"}>EUR</option>
          <option value={"BTC"}>BTC</option>
          <option value={"ETH"}>ETH</option>
        </StyledSelect>
      </CurrencyDiv>
      <StyledModeBtn onClick={toggleDisplayMode}>
        <ReactSVG src="ModeIcon.svg" />
      </StyledModeBtn>
    </NavContainer>
  );
};

export default Navbar;
