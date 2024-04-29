import { Dispatch, SetStateAction, useState } from "react";
import { useAppSelector } from "@/app/redux/hooks";
import { selectConverterCoins } from "@/app/redux/features/converterCoinsSlice";
import { TableData } from "@/app/redux/features/api";

const Search = ({
  setCoin,
  resetQuantities,
  isSearching,
  setIsSearching,
}: {
  setCoin: Dispatch<SetStateAction<TableData>>;
  resetQuantities: () => void;
  isSearching: boolean;
  setIsSearching: Dispatch<SetStateAction<boolean>>;
}) => {
  const [converterSearchQuery, setConverterSearchQuery] = useState("");
  const converterData = useAppSelector(selectConverterCoins);
  const searchResults = converterData.filter((coin: TableData) =>
    coin.name.includes(converterSearchQuery)
  );

  const handleSearch = (e: { target: { value: SetStateAction<string> } }) => {
    setConverterSearchQuery(e.target.value);
  };

  const handleSetCoin = (coin: TableData) => {
    setCoin(coin);
    resetQuantities();
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
        {isSearching &&
          searchResults?.map((coin: TableData) => {
            return (
              <div key={coin.id} onClick={() => handleSetCoin(coin)}>
                {coin.name}
              </div>
            );
          })}
      </div>
    </>
  );
};
export default Search;
