"use client";
import { useState } from "react";
import { useLocalStorage } from "../useLocalStorage";
import AddAssetModal, {
  FormDataState,
} from "../components/Portfolio/AddAsset/AddAssetModal";
import AssetCard from "../components/Portfolio/PortfolioAssets/AssetCard";
import {
  PageWrapper,
  HeaderDiv,
  AddButton,
  AssetCardContainer,
} from "../styling/components/Portfolio/styled.page";

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
          <div>No Assets Saved</div>
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
