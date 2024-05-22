import Image from "next/image";
import { CryptoIcon } from "../../SVGs/NavIcons/CoinIcons";
import { SelectedCoin } from "./AddAssetModal";
import {
  SelectedContainer,
  IconDiv,
  SelectedTitle,
} from "@/app/styling/components/Portfolio/AddAssetModal/styled.SelectedAsset";

const SelectedAsset = ({ selectedCoin }: { selectedCoin: SelectedCoin }) => {
  return (
    <SelectedContainer>
      <IconDiv>
        {selectedCoin.large === undefined ? (
          <CryptoIcon />
        ) : (
          <Image src={selectedCoin.large} alt="" height={25} width={25} />
        )}
      </IconDiv>
      <SelectedTitle>
        {selectedCoin.name === undefined ? "Select a Coin" : selectedCoin.name}
      </SelectedTitle>
    </SelectedContainer>
  );
};
export default SelectedAsset;
