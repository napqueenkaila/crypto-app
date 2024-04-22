import { SetStateAction, useState } from "react";
import { useGetSearchDataQuery } from "@/app/redux/features/api";
import { SearchInput, DropdownDiv, DropdownItem } from "@/app/styling/components/Navbar/styled.navbar";

const Search = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const { data } = useGetSearchDataQuery(searchQuery);
    const dropdownCoins = data?.coins.slice(0, 5);

    const handleSearch = (e: { target: { value: SetStateAction<string> } }) => {
      setSearchQuery(e.target.value);
    };
    return (
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
    );
};
export default Search;
