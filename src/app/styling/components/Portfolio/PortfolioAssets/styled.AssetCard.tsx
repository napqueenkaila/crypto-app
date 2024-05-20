import styled from "styled-components";

const CardContainer = styled.div`
  background-color: ${({ theme }) =>
    theme.portfolio.assets.assetCardBackground};
  border-radius: 12px;
  border: 2px solid ${({ theme }) => theme.portfolio.assets.assetCardBackground};
  padding: 20px;
  display: flex;
  gap: 20px;
`;

const DataBlockContainer = styled.div`
  display: grid;
  grid-template: 1fr 1fr / 1fr 1fr;
  gap: 20px;
  flex-grow: 1;
`;

export { CardContainer, DataBlockContainer };
