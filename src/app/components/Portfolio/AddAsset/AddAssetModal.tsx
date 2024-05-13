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
  selectedCoin: SelectedCoin;
  selectedAmount: string;
  selectedDate: string;
}

const AddAssetModal = ({
  setShowModal,
  handleUpdateAssets,
  assets,
  setAssets,
  assetToEdit,
  setAssetToEdit,
}: {
  setShowModal: Dispatch<SetStateAction<boolean>>;
  handleUpdateAssets: () => void;
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

    setAssets([...assets, assetToEdit]);
    setTimeout(() => setShowModal(false)); // allow setAssets to complete running
    handleUpdateAssets();
  };

  return (
    <Wrapper>
      <Modal>
        <ModalHeader setShowModal={setShowModal} />
        <SelectedAsset selectedCoin={assetToEdit.selectedCoin} />
        <FormContainer>
          <AssetSearch setFormData={setAssetToEdit} />
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
