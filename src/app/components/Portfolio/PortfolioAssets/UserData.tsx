import Image from "next/image";
import { CombinedCoinData } from "./AssetCard";
import styled from "styled-components";
import { ArrowIcon } from "../../SVGs";
import Button from "./Button";
import { formatCurrencyWithCommas } from "@/app/utils";
import { useAppSelector } from "@/app/redux/hooks";
import { selectCurrency } from "@/app/redux/features/currencySlice";

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
  color: #d1d1d1;
  font-size: 14px;
`;

const UserData = ({
  coinData,
  removeAsset,
  editAsset,
}: {
  coinData: CombinedCoinData;
  removeAsset: (id: string) => void;
  editAsset: (id: string) => void;
}) => {
  const { currency } = useAppSelector(selectCurrency);
  const isPositive = coinData.marketData.priceChangePercent > 0 ? true : false;

  return (
    <UserDataContainer>
      <AssetNameContainer>
        <Image src={coinData.image} alt="" height={32} width={32} />
        <AssetName>
          {coinData.name} ({coinData.symbol.toUpperCase()})
        </AssetName>
        <Button handleClick={editAsset} id={coinData.id} type="edit" />
        <Button handleClick={removeAsset} id={coinData.id} type="trash" />
      </AssetNameContainer>
      <TotalValueDiv>
        <div>Total Value</div>
        <PercentDiv>
          <TotalValue>
            {formatCurrencyWithCommas(coinData.totalValue, currency)}
          </TotalValue>
          <ArrowIcon isPositive={isPositive} />
          <PricePercent $isPositive={isPositive}>
            {coinData.marketData.priceChangePercent.toFixed(2)}%
          </PricePercent>
        </PercentDiv>
        <PurchasedDate>Purchased {coinData.selectedDate}</PurchasedDate>
      </TotalValueDiv>
    </UserDataContainer>
  );
};
export default UserData;
