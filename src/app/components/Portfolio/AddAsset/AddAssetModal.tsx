import { Dispatch, SetStateAction, useState } from "react";
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
  selectedCoin: SelectedCoin;
  selectedAmount: string;
  selectedDate: string;
}

const AddAssetModal = ({
  setShowModal,
  handleUpdateAssets,
  assets,
  setAssets,
}: {
  setShowModal: Dispatch<SetStateAction<boolean>>;
  handleUpdateAssets: () => void;
  assets: [];
  setAssets: Dispatch<SetStateAction<FormDataState[]>>;
}) => {
  const [formData, setFormData] = useState<FormDataState>({
    selectedCoin: {},
    selectedAmount: "",
    selectedDate: "",
  });
  const isDisabled =
    formData.selectedAmount === "" ||
    formData.selectedDate === "" ||
    formData.selectedCoin.id === undefined;

  const handleSaveAsset = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setAssets([...assets, formData]);
    setTimeout(() => setShowModal(false)); // allow setAssets to complete running
    handleUpdateAssets();
  };

  return (
    <Modal>
      <ModalHeader setShowModal={setShowModal} />
      <SelectedAsset selectedCoin={formData.selectedCoin} />
      <div>
        <AssetSearch setFormData={setFormData} />
        <AssetAmount
          setFormData={setFormData}
          selectedAmount={formData.selectedAmount}
        />
        <AssetDate
          setFormData={setFormData}
          selectedDate={formData.selectedDate}
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
