import styled from "styled-components";

const PageWrapper = styled.div`
  width: 90vw;
  margin: 0 auto;
`;

const HeaderDiv = styled.div`
  margin: 35px auto;
  font-weight: 500;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AddButton = styled.button`
  padding: 12px 16px;
  color: #ffffff;
  font-size: 16px;
  width: 250px;
  border-radius: 6px;
  border: 1px solid transparent;
  background: linear-gradient(360deg, #6161d6, #6161d680) border-box;
  &:hover {
    cursor: pointer;
  }
`;

const AssetCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export { PageWrapper, HeaderDiv, AddButton, AssetCardContainer };
