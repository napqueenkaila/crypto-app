import { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import ModalHeader from "./ModalHeader";
import AssetSearch from "./AssetSearch";
import AssetAmount from "./AssetAmount";
import AssetDate from "./AssetDate";
import SelectedAsset from "./SelectedAsset";

const Modal = styled.div`
  background-color: #13121a;
  border: 3px red solid;
  width: 50vw;
  height: 400px;
`;
export interface SelectedCoin {
  [key: string]: string;
}

export interface FormDataState {
  id: string;
  selectedCoin: SelectedCoin;
  selectedAmount: string;
  selectedDate: string;
}

const AddAssetModal = ({
  setShowModal,
  assets,
  setAssets,
  assetToEdit,
  setAssetToEdit,
}: {
  setShowModal: Dispatch<SetStateAction<boolean>>;
  assets: [];
  setAssets: Dispatch<SetStateAction<FormDataState[]>>;
  assetToEdit: FormDataState;
  setAssetToEdit: Dispatch<SetStateAction<FormDataState>>;
}) => {
  const isDisabled =
    assetToEdit.selectedAmount === "" ||
    assetToEdit.selectedDate === "" ||
    assetToEdit.selectedCoin.id === undefined;

  const handleSaveAsset = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (assetToEdit.id !== "") {
      const updatedAssets = assets.map((asset: FormDataState) => {
        return asset.id === assetToEdit.id ? assetToEdit : asset;
      });
      setAssets(updatedAssets);
    } else {
      const newAsset = { ...assetToEdit, id: self.crypto.randomUUID() };
      setAssets([...assets, newAsset]);
    }
    setAssetToEdit({
      id: "",
      selectedCoin: {},
      selectedAmount: "",
      selectedDate: "",
    });
    setTimeout(() => setShowModal(false)); // allow setAssets to complete running
  };

  return (
    <Modal>
      <ModalHeader
        setAssetToEdit={setAssetToEdit}
        setShowModal={setShowModal}
      />
      <SelectedAsset selectedCoin={assetToEdit.selectedCoin} />
      <div>
        <AssetSearch setFormData={setAssetToEdit} />
        <AssetAmount
          setFormData={setAssetToEdit}
          selectedAmount={assetToEdit.selectedAmount}
        />
        <AssetDate
          setFormData={setAssetToEdit}
          selectedDate={assetToEdit.selectedDate}
        />
      </div>
      <button onClick={() => setShowModal(false)}>Cancel</button>
      <button onClick={handleSaveAsset} disabled={isDisabled}>
        Save & Continue
      </button>
    </Modal>
  );
};
export default AddAssetModal;
