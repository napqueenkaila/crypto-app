import {
  NavContainer,
  SearchInput,
  DropdownDiv,
  DropdownItem,
  CurrencyDiv,
  StyledSelect,
  StyledModeBtn,
} from "@/app/styling/components/Navbar/styled.navbar";
import { useGetSearchDataQuery } from "@/app/redux/features/api";
import { SetStateAction, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks";
import { setCurrency } from "@/app/redux/features/currencySlice";
import { selectDarkMode, toggle } from "@/app/redux/features/darkModeSlice";
import {
  DollarIcon,
  DarkModeIcon,
  Logo,
} from "../SVGs/index";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const { darkMode } = useAppSelector(selectDarkMode);
  const [searchQuery, setSearchQuery] = useState("");
  const { data } = useGetSearchDataQuery(searchQuery);
  const dropdownCoins = data?.coins.slice(0, 5);

  const toggleDarkMode = () => {
    dispatch(toggle(darkMode));
  };

  const handleCurrencyChange = (e: { target: { value: string } }) => {
    dispatch(setCurrency(e.target.value));
  };

  const handleSearch = (e: { target: { value: SetStateAction<string> } }) => {
    setSearchQuery(e.target.value);
  };

  return (
    <NavContainer>
      <Logo darkMode={darkMode} />
      <NavLinks darkMode={darkMode} />
      <div>
        <SearchInput
          type="text"
          placeholder="&#128270;  Search..."
          onChange={handleSearch}
        />
        <DropdownDiv>
          {dropdownCoins?.map((coin: { id: string; name: string }) => {
            return (
              <DropdownItem href={`/coin/${coin.id}`} key={coin.id}>
                {coin.name}
              </DropdownItem>
            );
          })}
        </DropdownDiv>
      </div>
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
