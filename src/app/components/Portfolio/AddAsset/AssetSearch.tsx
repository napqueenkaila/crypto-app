import { useGetSearchDataQuery } from "@/app/redux/features/api";
import { Dispatch, SetStateAction, useState } from "react";
import { FormDataState } from "./AddAssetModal";

interface SearchResult {
  [key: string]: string | number;
}

const AssetSearch = ({
  setFormData,
}: {
  setFormData: Dispatch<SetStateAction<FormDataState>>;
}) => {
  const [assetQuery, setAssetQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const { data } = useGetSearchDataQuery(assetQuery);
  const results = data?.coins.slice(0, 10);

  const handleSearch = (e) => {
    setIsSearching(true);
    setAssetQuery(e.target.value);
  };

  const handleSetCoin = (coin) => {
    setIsSearching(false);
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        selectedCoin: coin,
      };
    });
  };

  return (
    <div>
      <input type="text" placeholder="Select coins" onChange={handleSearch} />
      {isSearching &&
        results.map((coin: SearchResult) => {
          return (
            <div key={coin.id} onClick={() => handleSetCoin(coin)}>
              {coin.name}
            </div>
          );
        })}
    </div>
  );
};
export default AssetSearch;
