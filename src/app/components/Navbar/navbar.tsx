import {
  NavContainer,
  StyledModeBtn,
} from "@/app/styling/components/Navbar/styled.navbar";
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks";
import { selectDarkMode, toggle } from "@/app/redux/features/darkModeSlice";
import { DarkModeIcon, Logo } from "../SVGs/index";
import NavLinks from "./NavLinks";
import Search from "./Search";
import CurrencySelect from "./CurrencySelect";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const { darkMode } = useAppSelector(selectDarkMode);

  const toggleDarkMode = () => {
    dispatch(toggle(darkMode));
  };

  return (
    <NavContainer>
      <Logo darkMode={darkMode} />
      <NavLinks darkMode={darkMode} />
      <Search />
      <CurrencySelect darkMode={darkMode} />
      <StyledModeBtn onClick={toggleDarkMode}>
        <DarkModeIcon darkMode={darkMode} />
      </StyledModeBtn>
    </NavContainer>
  );
};

export default Navbar;
