import Image from "next/image";
import { CryptoIcon } from "../../SVGs/NavIcons/CoinIcons";
import { SelectedCoin } from "./AddAssetModal";
import styled from "styled-components";

const SelectedContainer = styled.div`
  grid-area: selected;
  background-color: #191932;
  border-radius: 8px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

const IconDiv = styled.div`
  background-color: #2c2c4a;
  padding: 16px;
  border-radius: 8px;
  width: 64px;
  height: 64px;
`;

const SelectedTitle = styled.div`
  font-size: 28px;
  font-weight: 700;
`;

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
