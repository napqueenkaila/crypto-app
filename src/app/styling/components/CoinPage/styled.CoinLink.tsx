import styled from "styled-components";

const LinkDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 10px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.coinPage.blockBackgroundColor};
  color: ${({ theme }) => theme.coinPage.textColor};
  padding: 16px 24px;
`;

export { LinkDiv };
