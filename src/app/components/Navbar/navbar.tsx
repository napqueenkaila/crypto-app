import Image from "next/image";
import {
  NavContainer,
  LinkContainer,
  StyledLink,
  SearchInput,
  DropdownDiv,
  DropdownItem,
  CurrencyDiv,
  StyledSelect,
  StyledModeBtn,
} from "@/app/styling/components/styled.navbar";
import { useGetSearchDataQuery } from "@/app/redux/features/api";
import { SetStateAction, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks";
import { setCurrency } from "@/app/redux/features/currencySlice";
import { selectDarkMode, toggle } from "@/app/redux/features/darkModeSlice";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const darkMode = useAppSelector(selectDarkMode);
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
      <Image alt="logo" src="NavLogoDark.svg" width={25} height={25} />
      <LinkContainer>
        <StyledLink href={"/"}>
          <Image alt="home button" src="HomeIcon.svg" width={25} height={25} />
          Home
        </StyledLink>
        <StyledLink href={"/portfolio"}>
          <Image
            alt="portfolio button"
            src="PortfolioIcon.svg"
            width={25}
            height={25}
          />
          Portfolio
        </StyledLink>
      </LinkContainer>
      <div>
        <SearchInput
          type="text"
          placeholder="&#128270;  Search..."
          onChange={handleSearch}
        />
        <DropdownDiv>
          {dropdownCoins?.map((coin: { id: string; name: string }) => {
            return <DropdownItem key={coin.id}>{coin.name}</DropdownItem>;
          })}
        </DropdownDiv>
      </div>
      <CurrencyDiv>
        <label>
          <Image
            alt="currency button"
            src="DollarIcon.svg"
            width={25}
            height={25}
          />
        </label>
        <StyledSelect onChange={(e) => handleCurrencyChange(e)}>
          <option value={"USD"}>USD</option>
          <option value={"GBP"}>GBP</option>
          <option value={"EUR"}>EUR</option>
          <option value={"BTC"}>BTC</option>
          <option value={"ETH"}>ETH</option>
        </StyledSelect>
      </CurrencyDiv>
      <StyledModeBtn onClick={toggleDarkMode}>
        <Image
          alt="dark mode button"
          src="ModeIcon.svg"
          width={25}
          height={25}
        />
      </StyledModeBtn>
    </NavContainer>
  );
};

export default Navbar;
