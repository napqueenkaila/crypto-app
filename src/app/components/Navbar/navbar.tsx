import { useAppSelector } from "@/app/redux/hooks";
import { selectDarkMode } from "@/app/redux/features/darkModeSlice";
import NavLinks from "./NavLinks";
import Search from "./Search";
import CurrencySelect from "./CurrencySelect";
import DarkModeButton from "./DarkModeButton";
import { Logo } from "../SVGs/index";
import { NavContainer } from "@/app/styling/components/Navbar/styled.navbar";

const Navbar = () => {
  const { darkMode } = useAppSelector(selectDarkMode);
  return (
    <NavContainer>
      <Logo darkMode={darkMode} />
      <NavLinks darkMode={darkMode} />
      <Search />
      <CurrencySelect darkMode={darkMode} />
      <DarkModeButton darkMode={darkMode} />
    </NavContainer>
  );
};

export default Navbar;
