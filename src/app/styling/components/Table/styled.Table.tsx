import styled from "styled-components";

export const TableWrapper = styled.div`
  max-width: 80vw;
`;

export const TableHead = styled.div`
  color: #d1d1d1;
  font-size: 14px;
  font-weight: 400;
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr 4fr repeat(4, 2fr) repeat(2, 4fr) 2fr;
  place-items: start;
`;

export const CoinsTable = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
