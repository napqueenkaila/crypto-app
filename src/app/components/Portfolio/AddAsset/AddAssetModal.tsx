import { Dispatch, SetStateAction } from "react";
import ModalHeader from "./ModalHeader";
import AssetSearch from "./AssetSearch";
import AssetAmount from "./AssetAmount";
import AssetDate from "./AssetDate";
import SelectedAsset from "./SelectedAsset";
import {
  Wrapper,
  Modal,
  FormContainer,
  ButtonContainer,
  StyledButton,
  StyledSaveButton,
} from "@/app/styling/components/Portfolio/AddAssetModal/styled.AddAssetModal";

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
    <Wrapper>
      <Modal>
        <ModalHeader setShowModal={setShowModal} setAssetToEdit={setAssetToEdit} />
        <SelectedAsset selectedCoin={assetToEdit.selectedCoin} />
        <FormContainer>
          <AssetSearch setFormData={setAssetToEdit} selectedCoin={assetToEdit.selectedCoin.name}/>
          <AssetAmount
            setFormData={setAssetToEdit}
            selectedAmount={assetToEdit.selectedAmount}
          />
          <AssetDate
            setFormData={setAssetToEdit}
            selectedDate={assetToEdit.selectedDate}
          />
          <ButtonContainer>
            <StyledButton onClick={() => setShowModal(false)}>
              Cancel
            </StyledButton>
            <StyledSaveButton onClick={handleSaveAsset} disabled={isDisabled}>
              Save & Continue
            </StyledSaveButton>
          </ButtonContainer>
        </FormContainer>
      </Modal>
    </Wrapper>
  );
};
export default AddAssetModal;
