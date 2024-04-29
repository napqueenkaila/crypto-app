import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";
import Search from "./Search";
import { DownArrow } from "../SVGs/DownArrow";
import { TableData } from "@/app/redux/features/api";

const CoinInput = ({
  coinData,
  setCoin,
  quantity,
  resetQuantities,
  handleQuantityChange,
}: {
  coinData: TableData;
  setCoin: Dispatch<SetStateAction<TableData>>;
  quantity: number;
  resetQuantities: () => void;
  handleQuantityChange: (e: any) => void;
}) => {
  const [isSearching, setIsSearching] = useState(false);

  const handleShowSearch = () => {
    setIsSearching(!isSearching);
  };

  return (
    <div>
      {isSearching ? (
        <Search
          setCoin={setCoin}
          resetQuantities={resetQuantities}
          isSearching={isSearching}
          setIsSearching={setIsSearching}
        />
      ) : (
        <div onClick={handleShowSearch}>
          {coinData && (
            <>
              <Image src={coinData.image} alt="" width={25} height={25} />
              <div> {coinData.name}</div>
            </>
          )}
          <DownArrow />
        </div>
      )}
      <div>
        <input
          type="number"
          placeholder="e.g. 10"
          value={quantity}
          onChange={handleQuantityChange}
        />
      </div>
    </div>
  );
};
export default CoinInput;
