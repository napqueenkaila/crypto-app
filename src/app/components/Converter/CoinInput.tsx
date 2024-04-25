import Image from "next/image";
import { DownArrow } from "../SVGs/DownArrow";
import Search from "./Search";
import { Dispatch, SetStateAction, useState } from "react";

interface Coin {
  id: string;
  name: string;
  image: string;
  currentPrice: Record<string, number>;
}

const CoinInput = ({
  coinData,
  setCoin,
}: {
  coinData: Coin;
  setCoin: Dispatch<SetStateAction<string>>;
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
      <div></div>
    </div>
  );
};
export default CoinInput;
