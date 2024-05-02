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
  selectedAmount: number;
  selectedDate: string;
}

const AddAssetModal = ({
  setShowModal,
}: {
  setShowModal: Dispatch<SetStateAction<boolean>>;
}) => {
  const [formData, setFormData] = useState<FormDataState>({
    selectedCoin: {},
    selectedAmount: 0,
    selectedDate: "",
  });
  const [assets, setAssets] = useLocalStorage("assets", []);

  const handleSaveAsset = (e) => {
    e.preventDefault();
    setAssets([...assets, formData]);
    setTimeout(() => setShowModal(false)); // allow setAssets to complete running
  };

  return (
    <Modal>
      <ModalHeader setShowModal={setShowModal} />
      <div>
        <AssetSearch setFormData={setFormData} />
        <AssetAmount setFormData={setFormData} />
        <AssetDate setFormData={setFormData} />
      </div>
      <button onClick={() => setShowModal(false)}>Cancel</button>
      <button onClick={handleSaveAsset}>Save & Continue</button>
    </Modal>
  );
};
export default AddAssetModal;
