"use client";
import styled from "styled-components";
import AddAssetModal, {
  FormDataState,
} from "../components/Portfolio/AddAsset/AddAssetModal";
import { useState } from "react";
import AssetCard from "../components/Portfolio/PortfolioAssets/AssetCard";
import { useLocalStorage } from "../useLocalStorage";

const PageWrapper = styled.div`
  width: 90vw;
  margin: 0 auto;
`;

const HeaderDiv = styled.div`
  margin: 35px auto;
  font-weight: 500;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AddButton = styled.button`
  padding: 12px 16px;
  color: #ffffff;
  font-size: 16px;
  width: 250px;
  border-radius: 6px;
  border: 1px solid transparent;
  background: linear-gradient(360deg, #6161d6, #6161d680) border-box;
`;

const NoAssetsMessage = styled.div``;

const AssetCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export default function Portfolio() {
  const [showModal, setShowModal] = useState(false);
  const [assets, setAssets] = useLocalStorage("assets", []);
  const [hasAssets, setHasAssets] = useState(assets.length >= 1 ? true : false);
  const [assetToEdit, setAssetToEdit] = useState({
    selectedCoin: {},
    selectedAmount: "",
    selectedDate: "",
  });

  const handleUpdateAssets = () => {
    setHasAssets(true);
  };

  const removeAsset = (id: string) => {
    const updatedAssets = assets.filter(
      (asset: FormDataState) => asset.selectedCoin.id !== id
    );
    setAssets(updatedAssets);
  };

  const editAsset = (id: string) => {
    setShowModal(true);
    const selectedAsset = assets.find(
      (asset: FormDataState) => asset.selectedCoin.id === id
    );
    setAssetToEdit(selectedAsset);
  };

  return (
    <PageWrapper>
      <HeaderDiv>
        <div>Portfolio</div>
        <AddButton onClick={() => setShowModal(true)}>Add Asset</AddButton>
      </HeaderDiv>
      <AssetCardContainer>
        {hasAssets ? (
          assets.map((asset: FormDataState) => (
            <AssetCard
              key={asset.selectedCoin.id}
              asset={asset}
              removeAsset={removeAsset}
              editAsset={editAsset}
            />
          ))
        ) : (
          <NoAssetsMessage>No Assets Saved</NoAssetsMessage>
        )}
      </AssetCardContainer>
      {showModal && (
        <AddAssetModal
          handleUpdateAssets={handleUpdateAssets}
          assets={assets}
          setAssets={setAssets}
          setShowModal={setShowModal}
          assetToEdit={assetToEdit}
          setAssetToEdit={setAssetToEdit}
        />
      )}
    </PageWrapper>
  );
}
