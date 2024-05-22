import styled from "styled-components";

const SelectedContainer = styled.div`
  grid-area: selected;
  background-color: #191932;
  border-radius: 8px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

const IconDiv = styled.div`
  background-color: #2c2c4a;
  padding: 16px;
  border-radius: 8px;
  width: 64px;
  height: 64px;
`;

const SelectedTitle = styled.div`
  font-size: 28px;
  font-weight: 700;
`;

export { SelectedContainer, IconDiv, SelectedTitle };
