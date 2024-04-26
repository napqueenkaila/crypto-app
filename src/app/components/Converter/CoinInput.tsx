import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";
import Search from "./Search";
import { DownArrow } from "../SVGs/DownArrow";

interface Coin {
  id: string;
  name: string;
  image: string;
  currentPrice: Record<string, number>;
}

const CoinInput = ({
  type,
  coinData,
  setCoin,
  quantity,
  handleQuantityChange,
}: {
  type: string;
  coinData: Coin;
  setCoin: Dispatch<SetStateAction<string>>;
  quantity: number | undefined;
  handleQuantityChange: (e: any, type: any) => void;
}) => {
  const [isSearching, setIsSearching] = useState(false);

  const handleShowSearch = () => {
    setIsSearching(!isSearching);
  };

  return (
    <div>
      {isSearching ? (
        <Search setCoin={setCoin} setIsSearching={setIsSearching} />
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
          value={quantity}
          onChange={(e) => handleQuantityChange(e, type)}
        />
      </div>
    </div>
  );
};
export default CoinInput;
