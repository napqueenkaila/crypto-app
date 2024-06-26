import { useEffect, useState } from "react";
import { useAppSelector } from "@/app/redux/hooks";
import { selectCurrency } from "@/app/redux/features/currencySlice";
import {
  useGetCoinDataQuery,
  useGetCoinHistoryDataQuery,
} from "@/app/redux/features/api";
import { FormDataState } from "../AddAsset/AddAssetModal";
import UserData from "./UserData";
import DataBlock from "./DataBlock";
import { formatCurrencyWithCommas, formatDate } from "@/app/utils";
import {
  DataBlockContainer,
  CardContainer,
} from "@/app/styling/components/Portfolio/PortfolioAssets/styled.AssetCard";

export interface CombinedCoinData {
  id: string;
  apiSymbol: string;
  name: string;
  symbol: string;
  image: string;
  selectedDate: string;
  selectedAmount: string;
  totalValue: number;
  historical: {
    currentPrice: number;
    marketCap: number;
    totalVolume: number;
  };
  marketData: {
    circulatingSupply: number;
    currentPrice: Record<string, number>;
    marketCap: Record<string, number>;
    priceChangePercent: number;
    totalSupply: number;
    totalVolume: Record<string, number>;
  };
}

const AssetCard = ({
  asset,
  removeAsset,
  editAsset,
}: {
  asset: FormDataState;
  removeAsset: (id: string) => void;
  editAsset: (id: string) => void;
}) => {
  const { currency } = useAppSelector(selectCurrency);
  const { data: coinData, isSuccess: coinIsSuccess } = useGetCoinDataQuery(
    asset.selectedCoin.id
  );

  const { data: historicalData, isSuccess: historicalIsSuccess } =
    useGetCoinHistoryDataQuery({
      coinId: asset.selectedCoin.id,
      date: formatDate(asset.selectedDate),
    });
  const [doubleSuccess, setDoubleSuccess] = useState(false);
  const [combinedCoinData, setCombinedCoinData] = useState<CombinedCoinData>({
    id: "",
    apiSymbol: "",
    name: "",
    symbol: "",
    image: "",
    selectedDate: "",
    selectedAmount: "",
    totalValue: 0,
    historical: { currentPrice: 0, marketCap: 0, totalVolume: 0 },
    marketData: {
      circulatingSupply: 0,
      currentPrice: {},
      marketCap: {},
      priceChangePercent: 0,
      totalSupply: 0,
      totalVolume: {},
    },
  });

  useEffect(() => {
    if (coinIsSuccess && historicalIsSuccess) {
      setDoubleSuccess(true);
      setCombinedCoinData({
        id: asset.id,
        apiSymbol: asset.selectedCoin.id,
        name: asset.selectedCoin.name,
        symbol: asset.selectedCoin.symbol,
        image: asset.selectedCoin.large,
        selectedDate: asset.selectedDate,
        selectedAmount: asset.selectedAmount,
        totalValue:
          Number(asset.selectedAmount) *
          coinData.market_data.current_price[currency],
        historical: {
          currentPrice: historicalData.historicalData.current_price,
          marketCap: historicalData.historicalData.market_cap,
          totalVolume: historicalData.historicalData.total_volume,
        },
        marketData: {
          currentPrice: coinData.market_data.current_price,
          marketCap: coinData.market_data.market_cap,
          totalVolume: coinData.market_data.total_volume,
          priceChangePercent: coinData.market_data.price_change_percentage_24h,
          circulatingSupply: coinData.market_data.circulating_supply,
          totalSupply: coinData.market_data.total_supply,
        },
      });
    }
  }, [
    asset,
    coinData,
    coinIsSuccess,
    currency,
    historicalData,
    historicalIsSuccess,
  ]);

  return (
    <CardContainer>
      {doubleSuccess && (
        <>
          <UserData
            coinData={combinedCoinData}
            removeAsset={removeAsset}
            editAsset={editAsset}
          />
          <DataBlockContainer>
            <DataBlock
              coinData={formatCurrencyWithCommas(
                combinedCoinData.marketData.currentPrice[currency],
                currency
              )}
              title="Current Price"
              isPercent={false}
              hasPercentBar={false}
            />
            <DataBlock
              coinData={Number(
                combinedCoinData.marketData.priceChangePercent.toFixed(0)
              )}
              title="24h%"
              isPercent={true}
              hasPercentBar={false}
            />
            <DataBlock
              coinData={Number(
                (
                  combinedCoinData.marketData.marketCap[currency] /
                  combinedCoinData.marketData.totalVolume[currency]
                ).toFixed(0)
              )}
              title="Market cap vs Volume"
              isPercent={true}
              hasPercentBar={true}
            />
            <DataBlock
              coinData={Number(
                (
                  (combinedCoinData.marketData.circulatingSupply /
                    combinedCoinData.marketData.totalSupply) *
                  100
                ).toFixed(0)
              )}
              title="Circ supply vs max supply"
              isPercent={true}
              hasPercentBar={false}
            />
          </DataBlockContainer>
        </>
      )}
    </CardContainer>
  );
};
export default AssetCard;
