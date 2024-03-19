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

type NavbarProps = {
  setDisplayMode: (val: string) => void;
};

const Navbar = (props: NavbarProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const { data } = useGetSearchDataQuery(searchQuery);
  const dropdownCoins = data?.coins.slice(0, 5);

  const toggleDisplayMode = () => {
    if (localStorage.getItem("displayMode") === "dark") {
      localStorage.setItem("displayMode", "light");
      props.setDisplayMode("light");
    } else {
      localStorage.setItem("displayMode", "dark");
      props.setDisplayMode("dark");
    }
  };

  const handleCurrencyChange = (e: { target: { value: string; }; }) => {
    localStorage.setItem("selectedCurrency", e.target.value);
  };

  const handleSearch = (e: { target: { value: SetStateAction<string>; }; } ) => {
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
          {dropdownCoins?.map((coin: {id: string, name: string}) => {
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
        <StyledSelect onChange={handleCurrencyChange}>
          <option value={"USD"}>USD</option>
          <option value={"GBP"}>GBP</option>
          <option value={"EUR"}>EUR</option>
          <option value={"BTC"}>BTC</option>
          <option value={"ETH"}>ETH</option>
        </StyledSelect>
      </CurrencyDiv>
      <StyledModeBtn onClick={toggleDisplayMode}>
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
