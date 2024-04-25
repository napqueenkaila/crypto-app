import { useGetSearchDataQuery } from "@/app/redux/features/api";
import { SetStateAction, useState } from "react";

  const [converterSearchQuery, setConverterSearchQuery] = useState("");
  const { data } = useGetSearchDataQuery(converterSearchQuery);
  const dropDownCoins = data.coins.slice(0, 10);

  const handleSearch = (e: { target: { value: SetStateAction<string> } }) => {
    setConverterSearchQuery(e.target.value);
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
          return <div key={coin.id}>{coin.name}</div>;
        })}
      </div>
    </>
  );
};
export default Search;
