import styled from "styled-components";

const DescriptionDiv = styled.div`
  grid-area: description;
`;

const Title = styled.div`
  font-weight: 500;
  font-size: 20px;
  margin-bottom: 15px;
`;

const StyledButton = styled.button`
  background: none;
  color: ${({theme}) => theme.coinPage.buttonBackground};
  border: none;
  display: inline;
`;

export { DescriptionDiv, Title, StyledButton };
