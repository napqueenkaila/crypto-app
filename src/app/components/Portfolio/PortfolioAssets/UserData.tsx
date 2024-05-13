import Image from "next/image";
import { useAppSelector } from "@/app/redux/hooks";
import { selectCurrency } from "@/app/redux/features/currencySlice";
import { CombinedCoinData } from "./AssetCard";
import Button from "./Button";
import { ArrowIcon } from "../../SVGs";
import { formatCurrencyWithCommas } from "@/app/utils";
import {
  UserDataContainer,
  AssetNameContainer,
  AssetName,
  TotalValueDiv,
  TotalValue,
  PercentDiv,
  PricePercent,
  PurchasedDate,
} from "@/app/styling/components/Portfolio/PortfolioAssets/styled.UserData";

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
