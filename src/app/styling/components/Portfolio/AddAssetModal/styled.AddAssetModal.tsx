import styled from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Modal = styled.div`
  background-color: #13121a;
  border-radius: 20px;
  width: 800px;
  height: 400px;
  padding: 48px;
  display: grid;
  grid-template-areas:
    "header header header"
    "selected form form"
    "selected form form"
    "selected form form";
  gap: 20px;
`;

const FormContainer = styled.div`
  grid-area: form;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const StyledButton = styled.button`
  width: 50%;
  border-radius: 6px;
  border: none;
  color: #ffffff;
  padding: 12px 32px;
  background-color: #232336;
  font-size: 16px;
`;

const StyledSaveButton = styled(StyledButton)`
  background-color: #6161d680;
`;

export {
  Wrapper,
  Modal,
  FormContainer,
  ButtonContainer,
  StyledButton,
  StyledSaveButton,
};
