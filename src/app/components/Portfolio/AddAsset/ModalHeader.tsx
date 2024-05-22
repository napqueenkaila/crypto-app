import { Dispatch, SetStateAction } from "react";
import { CloseCircle } from "../../SVGs";
import { HeaderContainer } from "@/app/styling/components/Portfolio/AddAssetModal/styled.ModalHeader";
import { FormDataState } from "./AddAssetModal";

const ModalHeader = ({
  setShowModal,
  setAssetToEdit,
}: {
  setShowModal: Dispatch<SetStateAction<boolean>>;
  setAssetToEdit: Dispatch<SetStateAction<FormDataState>>;
}) => {
  const handleCloseModal = () => {
    setShowModal(false);
    setAssetToEdit({
      id: "",
      selectedCoin: {},
      selectedAmount: "",
      selectedDate: "",
    });
  };

  return (
    <HeaderContainer>
      <div>Select coins</div>
      <CloseCircle handleCloseModal={handleCloseModal} />
    </HeaderContainer>
  );
};
export default ModalHeader;
