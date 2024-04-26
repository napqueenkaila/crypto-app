import { SetStateAction, useEffect, useRef, useState } from "react";
import { useGetSearchDataQuery } from "@/app/redux/features/api";
import {
  SearchInput,
  DropdownDiv,
  DropdownItem,
} from "@/app/styling/components/Navbar/styled.navbar";

const Search = () => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { data } = useGetSearchDataQuery(searchQuery);
  const dropdownCoins = data?.coins.slice(0, 5);

  const handleSearch = (e: { target: { value: SetStateAction<string> } }) => {
    setIsOpen(true);
    setSearchQuery(e.target.value);
  };

  const handleOutsideClick = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div>
      <SearchInput
        type="text"
        placeholder="&#128270;  Search..."
        onChange={handleSearch}
      />
      <DropdownDiv ref={dropdownRef}>
        {isOpen &&
          dropdownCoins?.map((coin: { id: string; name: string }) => {
            return (
              <DropdownItem href={`/coin/${coin.id}`} key={coin.id}>
                {coin.name}
              </DropdownItem>
            );
          })}
      </DropdownDiv>
    </div>
  );
};
export default Search;
