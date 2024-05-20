import { Dispatch, SetStateAction } from "react";
import { CloseCircle } from "../../SVGs";
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
    <>
      <div>Select coins</div>
      <CloseCircle handleCloseModal={handleCloseModal} />
    </>
  );
};
export default ModalHeader;
