import {
  useGetCoinDataQuery,
  useGetCoinHistoryDataQuery,
} from "@/app/redux/features/api";
import { selectCurrency } from "@/app/redux/features/currencySlice";
import { useAppSelector } from "@/app/redux/hooks";
import Image from "next/image";
import { FormDataState } from "../AddAsset/AddAssetModal";
import { useEffect, useState } from "react";

interface CombinedCoinData {
  id: string;
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

const AssetCard = ({ asset }: { asset: FormDataState }) => {
  const { currency } = useAppSelector(selectCurrency);
  const { data: coinData, isSuccess: coinIsSuccess } = useGetCoinDataQuery(
    asset.selectedCoin.id
  );
  const { data: historicalData, isSuccess: historicalIsSuccess } =
    useGetCoinHistoryDataQuery({
      coinId: asset.selectedCoin.id,
      date: asset.selectedDate,
    });
  const [doubleSuccess, setDoubleSuccess] = useState(false);
  const [combinedCoinData, setCombinedCoinData] = useState<CombinedCoinData>({
    id: "",
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
        id: asset.selectedCoin.id,
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
    <div>
      {doubleSuccess && (
        <>
          <div>
            <Image src={combinedCoinData.image} alt="" height={25} width={25} />
            <div>
              {combinedCoinData.name} ({combinedCoinData.symbol.toUpperCase()})
            </div>
          </div>
          <div>
            <div>Total Value</div>
            <div>{combinedCoinData.totalValue}</div>
            <div>
              {combinedCoinData.marketData.priceChangePercent.toString()}
            </div>
            <div>Purchased {combinedCoinData.selectedDate}</div>
          </div>
          <div>
            <div>
              <div>{combinedCoinData.marketData.currentPrice[currency]}</div>
              <div>Current Price</div>
            </div>
            <div>
              <div>
                {(
                  combinedCoinData.marketData.marketCap[currency] /
                  combinedCoinData.marketData.totalVolume[currency]
                ).toFixed(0)}
                %
              </div>
              <div>Market cap vs Volume</div>
            </div>
            <div>
              <div>
                {(combinedCoinData.marketData.priceChangePercent * 100).toFixed(
                  0
                )}
                %
              </div>
              <div>24h%</div>
            </div>
            <div>
              <div>
                {(
                  (combinedCoinData.marketData.circulatingSupply /
                    combinedCoinData.marketData.totalSupply) *
                  100
                ).toFixed(0)}
                %
              </div>
              <div>Circ supply vs max supply</div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default AssetCard;
