import { Dispatch, SetStateAction, useState } from "react";
import styled from "styled-components";
import { useLocalStorage } from "@/app/useLocalStorage";
import ModalHeader from "./ModalHeader";
import AssetSearch from "./AssetSearch";
import AssetAmount from "./AssetAmount";
import AssetDate from "./AssetDate";

const Modal = styled.div`
  background-color: #13121a;
  border: 3px red solid;
  width: 50vw;
  height: 400px;
`;

export interface FormDataState {
  selectedCoin: { [key: string]: string | number };
  selectedAmount: string;
  selectedDate: string;
}

const AddAssetModal = ({
  setShowModal,
}: {
  setShowModal: Dispatch<SetStateAction<boolean>>;
}) => {
  const [formData, setFormData] = useState<FormDataState>({
    selectedCoin: {},
    selectedAmount: "",
    selectedDate: "",
  });
  const [assets, setAssets] = useLocalStorage("assets", []);

  const handleSaveAsset = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setAssets([...assets, formData]);
    setTimeout(() => setShowModal(false)); // allow setAssets to complete running
  };

  return (
    <Modal>
      <ModalHeader setShowModal={setShowModal} />
      <div>
        <AssetSearch setFormData={setFormData} />
        <AssetAmount setFormData={setFormData} selectedAmount={formData.selectedAmount} />
        <AssetDate setFormData={setFormData} selectedDate={ formData.selectedDate} />
      </div>
      <button onClick={() => setShowModal(false)}>Cancel</button>
      <button onClick={handleSaveAsset}>
        Save & Continue
      </button>
    </Modal>
  );
};
export default AddAssetModal;
