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

export default function Portfolio() {
  const [showModal, setShowModal] = useState(false);
  const [assets, setAssets] = useLocalStorage("assets", []);
  const [hasAssets, setHasAssets] = useState(assets.length >= 1 ? true : false);

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
    const selectedAsset = assets.find((asset: FormDataState) => asset.selectedCoin.id === id);
    setAssetToEdit(selectedAsset);
  };

  return (
    <PageWrapper>
      <div>
        <div>Portfolio</div>
        <button onClick={() => setShowModal(true)}>Add Asset</button>
      </div>
      {hasAssets ? (
        assets.map((asset: FormDataState) => (
          <AssetCard
            key={asset.selectedCoin.id}
            asset={asset}
            removeAsset={removeAsset}
          />
        ))
      ) : (
        <div>Add Assets to Your Portfolio</div>
      )}
      {showModal && (
        <AddAssetModal
          handleUpdateAssets={handleUpdateAssets}
          assets={assets}
          setAssets={setAssets}
          setShowModal={setShowModal}
        />
      )}
    </PageWrapper>
  );
}
