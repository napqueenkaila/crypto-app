"use client";
import styled from "styled-components";
import AddAssetModal, {
  FormDataState,
} from "../components/Portfolio/AddAsset/AddAssetModal";
import { useEffect, useState } from "react";
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
  const [assetToEdit, setAssetToEdit] = useState({
    id: "",
    selectedCoin: {},
    selectedAmount: "",
    selectedDate: "",
  });

  useEffect(() => {
    assets.length >= 1 ? setHasAssets(true) : setHasAssets(false);
  }, [assets]);

  const removeAsset = (id: string) => {
    const updatedAssets = assets.filter(
      (asset: FormDataState) => asset.id !== id
    );
    setAssets(updatedAssets);
  };

  const editAsset = (id: string) => {
    setShowModal(true);
    const selectedAsset = assets.find(
      (asset: FormDataState) => asset.id === id
    );
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
            key={asset.id}
            asset={asset}
            removeAsset={removeAsset}
            editAsset={editAsset}
          />
        ))
      ) : (
        <div>Add Assets to Your Portfolio</div>
      )}
      {showModal && (
        <AddAssetModal
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
