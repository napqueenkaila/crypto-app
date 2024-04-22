import {
  NavContainer,
  CurrencyDiv,
  StyledSelect,
  StyledModeBtn,
} from "@/app/styling/components/Navbar/styled.navbar";
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks";
import { setCurrency } from "@/app/redux/features/currencySlice";
import { selectDarkMode, toggle } from "@/app/redux/features/darkModeSlice";
import {
  DollarIcon,
  DarkModeIcon,
  Logo,
} from "../SVGs/index";
import NavLinks from "./NavLinks";
import Search from "./Search";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const { darkMode } = useAppSelector(selectDarkMode);
  
  const toggleDarkMode = () => {
    dispatch(toggle(darkMode));
  };

  const handleCurrencyChange = (e: { target: { value: string } }) => {
    dispatch(setCurrency(e.target.value));
  };

  return (
    <NavContainer>
      <Logo darkMode={darkMode} />
      <NavLinks darkMode={darkMode} />
      <Search />
      <CurrencyDiv>
        <label>
          <DollarIcon darkMode={darkMode} />
        </label>
        <StyledSelect onChange={handleCurrencyChange}>
          <option value="usd">USD</option>
          <option value="gbp">GBP</option>
          <option value="eur">EUR</option>
          <option value="btc">BTC</option>
          <option value="eth">ETH</option>
        </StyledSelect>
      </CurrencyDiv>
      <StyledModeBtn onClick={toggleDarkMode}>
        <DarkModeIcon darkMode={darkMode} />
      </StyledModeBtn>
    </NavContainer>
  );
};

export default Navbar;
