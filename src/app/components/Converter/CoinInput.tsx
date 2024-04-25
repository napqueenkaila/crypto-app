import Image from "next/image";
import { DownArrow } from "../SVGs/DownArrow";
import Search from "./Search";
import { useState } from "react";

interface Coin {
  name: string;
  id: string;
  image: string;
  currentPrice: number;
}

const CoinInput = ({ coin }: { coin: Coin }) => {
  const [isSearching, setIsSearching] = useState(false);

  const handleShowSearch = () => { 
    setIsSearching(true);
  };
  return (
    <div onClick={handleShowSearch}>
      {isSearching ? (
        <Search />
      ) : (
        <>
          <Image src={coin.image} alt="" width={25} height={25} />
          <div> {coin.name}</div>
          <DownArrow />
        </>
      )}
      <div></div>
    </div>
  );
};
export default CoinInput;
