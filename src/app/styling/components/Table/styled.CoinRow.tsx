import Link from "next/link";
import styled from "styled-components";

export const StyledRow = styled.div`
  padding: 20px;
  background-color: #191925;
  border-radius: 12px;
  display: grid;
  grid-template-columns: 1fr 4fr repeat(4, 2fr) repeat(2, 4fr) 2fr;
  gap: 10px;
  align-items: center;
`;

export const RankDiv = styled.div`
  color: #d1d1d1;
  font-weight: 500;
`;

export const NameDiv = styled(Link)`
  display: flex;
  align-items: center;
  gap: 15px;
  max-width: 200px;
  color: #FFFFFF;
  text-decoration: none;
  .name {
    overflow-wrap: break-word;
  }
`;
