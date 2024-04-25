import { useGetSearchDataQuery } from "@/app/redux/features/api";
import { Dispatch, SetStateAction, useState } from "react";

const Search = ({
  setCoin,
  setIsSearching,
}: {
  setCoin: Dispatch<SetStateAction<string>>;
  setIsSearching: Dispatch<SetStateAction<boolean>>;
}) => {
  const [converterSearchQuery, setConverterSearchQuery] = useState("");
  const { data } = useGetSearchDataQuery(converterSearchQuery);
  const dropDownCoins = data.coins.slice(0, 10);

  const handleSearch = (e: { target: { value: SetStateAction<string> } }) => {
    setConverterSearchQuery(e.target.value);
  };

  const handleSetCoin = (id: string) => {
    setCoin(id);
    setIsSearching(false);
  };

  return (
    <>
      <input
        type="text"
        placeholder="&#128270;  Search..."
        value={converterSearchQuery}
        onChange={handleSearch}
      />
      <div>
        {dropDownCoins?.map((coin: { id: string; name: string }) => {
          return (
            <div key={coin.id} onClick={() => handleSetCoin(coin.id)}>
              {coin.name}
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Search;
