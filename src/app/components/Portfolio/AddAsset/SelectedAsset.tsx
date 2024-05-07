import Image from "next/image";
import { CryptoIcon } from "../../SVGs/NavIcons/CoinIcons";
import { SelectedCoin } from "./AddAssetModal";

const SelectedAsset = ({ selectedCoin }: { selectedCoin: SelectedCoin }) => {
  return (
    <div>
      {selectedCoin.large === undefined ? (
        <CryptoIcon />
      ) : (
        <Image src={selectedCoin.large} alt="" height={25} width={25} />
      )}
      {selectedCoin.name === undefined ? (
        <div>Select a Coin</div>
      ) : (
        <div>{selectedCoin.name}</div>
      )}
    </div>
  );
};
export default SelectedAsset;
