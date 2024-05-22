import styled from "styled-components";

const StyledButton = styled.div`
  background-color: ${({ theme }) => theme.portfolio.assets.buttonBackground};
  padding: 8px;
  border-radius: 4px;
  border: none;
  display: flex;
  &:hover {
    cursor: pointer;
  }
`;

export { StyledButton };
