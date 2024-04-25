import { useGetSearchDataQuery } from "@/app/redux/features/api";
import { SetStateAction, useState } from "react";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { data } = useGetSearchDataQuery(searchQuery);
  const dropDownCoins = data.coins.slice(0, 10);

  const handleSearch = (e: { target: { value: SetStateAction<string> } }) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
      <input
        type="text"
        placeholder="&#128270;  Search..."
        value={searchQuery}
        onChange={handleSearch}
      />
      <div>
        {dropDownCoins?.map((coin: { id: string; name: string }) => {
          return <div key={coin.id}>{coin.name}</div>;
        })}
      </div>
    </>
  );
};
export default Search;
