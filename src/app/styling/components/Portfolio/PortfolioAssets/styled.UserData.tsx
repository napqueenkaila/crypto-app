import styled from "styled-components";

const UserDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const AssetNameContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const AssetName = styled.div`
  font-size: 24px;
  font-weight: 700;
`;

const TotalValueDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const PercentDiv = styled.div`
  display: flex;
  align-items: baseline;
  gap: 10px;
`;

const TotalValue = styled.div`
  font-size: 28px;
  font-weight: 700;
`;

const PricePercent = styled.div<{ $isPositive: boolean }>`
  color: ${(props) => (props.$isPositive ? "#01F1E3" : "#FE2264")};
`;

const PurchasedDate = styled.div`
  color: ${({ theme }) => theme.portfolio.assets.purchaseDate};
  font-size: 14px;
`;

export {
  UserDataContainer,
  AssetNameContainer,
  AssetName,
  TotalValueDiv,
  TotalValue,
  PercentDiv,
  PricePercent,
  PurchasedDate,
};
