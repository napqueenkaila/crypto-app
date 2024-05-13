import { Dispatch, SetStateAction } from "react";
import { CloseCircle } from "../../SVGs";
import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  grid-area: header;
`;

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
