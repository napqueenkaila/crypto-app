"use client";
import { useState } from "react";
import { useLocalStorage } from "../useLocalStorage";
import AddAssetModal, {
  FormDataState,
} from "../components/Portfolio/AddAsset/AddAssetModal";
import { useEffect, useState } from "react";
import AssetCard from "../components/Portfolio/PortfolioAssets/AssetCard";
import {
  PageWrapper,
  HeaderDiv,
  AddButton,
  AssetCardContainer,
} from "../styling/components/Portfolio/styled.page";
import { spaceGrotesk } from "../styling/theme/font";

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
      <HeaderDiv>
        <div>Portfolio</div>
        <AddButton
          className={spaceGrotesk.className}
          onClick={() => setShowModal(true)}
        >
          Add Asset
        </AddButton>
      </HeaderDiv>
      <AssetCardContainer>
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
      </AssetCardContainer>

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
