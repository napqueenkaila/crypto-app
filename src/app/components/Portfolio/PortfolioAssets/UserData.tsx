import Image from "next/image";
import { CombinedCoinData } from "./AssetCard";
import styled from "styled-components";
import { ArrowIcon } from "../../SVGs";
import Button from "./Button";

const PricePercent = styled.div<{ $isPositive: boolean }>`
  color: ${(props) => (props.$isPositive ? "#01F1E3" : "#FE2264")};
`;

const UserData = ({
  coinData,
  removeAsset,
}: {
  coinData: CombinedCoinData;
  removeAsset: (id: string) => void;
}) => {
  const isPositive = coinData.marketData.priceChangePercent > 0 ? true : false;
  return (
    <>
      <div>
        <Image src={coinData.image} alt="" height={25} width={25} />
        <div>
          {coinData.name} ({coinData.symbol.toUpperCase()})
        </div>
        <Button handleClick={removeAsset} id={coinData.id} />
      </div>
      <div>
        <div>Total Value</div>
        <div>
          <div>{coinData.totalValue}</div>
          <ArrowIcon isPositive={isPositive} />
          <PricePercent $isPositive={isPositive}>
            {coinData.marketData.priceChangePercent.toFixed(2)}
          </PricePercent>
        </div>
        <div>Purchased {coinData.selectedDate}</div>
      </div>
    </>
  );
};
export default UserData;
