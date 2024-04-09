import styled from "styled-components";

const GridContainer = styled.div`
  margin: 0 auto;
  padding: 20px 0;
  width: 100%;
  max-width: 90vw;
  display: grid;
  grid-template-areas:
    "name profit stats stats"
    "homelink profit stats stats"
    "description description links links";
  gap: 20px;
  justify-content: center;
  place-items: stretch center;
`;

const CoinName = styled.div`
  grid-area: name;
  background-color: ${({ theme }) => theme.coinPage.blockBackgroundColor};
  color: ${({ theme }) => theme.coinPage.textColor};
  font-weight: 700;
  font-size: 28px;
  border-radius: 12px;
  padding: 40px 50px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const HomeLink = styled.div`
  grid-area: homelink;
  place-self: center;
  width: 100%;
`;

const LinkContainer = styled.div`
  grid-area: links;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export { GridContainer, CoinName, HomeLink, LinkContainer };
