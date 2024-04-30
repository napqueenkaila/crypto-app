import { Dispatch, SetStateAction } from "react";
import { CloseCircle } from "../../SVGs";

const ModalHeader = ({
  setShowModal,
}: {
  setShowModal: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <>
      <div>Select coins</div>
      <CloseCircle setShowModal={setShowModal} />
    </>
  );
};
export default ModalHeader;
