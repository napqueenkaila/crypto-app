import { Dispatch, SetStateAction } from "react";
import { CloseCircle } from "../../SVGs";
import { HeaderContainer } from "@/app/styling/components/Portfolio/AddAssetModal/styled.ModalHeader";

const ModalHeader = ({
  setShowModal,
}: {
  setShowModal: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <HeaderContainer>
      <div>Select coins</div>
      <CloseCircle setShowModal={setShowModal} />
    </HeaderContainer>
  );
};
export default ModalHeader;
