import { useGetSearchDataQuery } from "@/app/redux/features/api";
import { Dispatch, SetStateAction, useState } from "react";
import { FormDataState } from "./AddAssetModal";
import { StyledInput } from "@/app/styling/components/Portfolio/AddAssetModal/styled.FormComponents";

interface SearchResult {
  [key: string]: string;
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

  const handleSearch = (e: { target: { value: SetStateAction<string> } }) => {
    setIsSearching(true);
    setAssetQuery(e.target.value);
  };

  const handleSetCoin = (coin: SearchResult) => {
    setIsSearching(false);
    setAssetQuery(coin.name);
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        selectedCoin: coin,
      };
    });
  };

  return (
    <>
      <StyledInput
        type="text"
        value={assetQuery}
        placeholder="Select coins"
        onChange={handleSearch}
      />
      {isSearching &&
        results.map((coin: SearchResult) => {
          return (
            <div key={coin.id} onClick={() => handleSetCoin(coin)}>
              {coin.name}
            </div>
          );
        })}
    </>
  );
};
export default AssetSearch;
