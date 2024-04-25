import Image from "next/image";
import { DownArrow } from "../SVGs/DownArrow";

interface Coin {
  name: string;
  id: string;
  image: string;
  currentPrice: number;
}

const CoinInput = ({ coin }: { coin: Coin }) => {

  return (
    <div>
      <Image src={coin.image} alt="" width={25} height={25} />
      {coin.name}
      <DownArrow />
    </div>
  );
};
export default CoinInput;
