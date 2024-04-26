import { useAppSelector } from "@/app/redux/hooks";
import { selectCurrency } from "@/app/redux/features/currencySlice";
import { formatCurrencyWithCommas } from "@/app/utils";

interface Coin {
  id: string;
  name: string;
  image: string;
  symbol: string;
  currentPrice: Record<string, number>;
}
const CoinOutput = ({ coinData }: { coinData: Coin }) => {
  const { currency } = useAppSelector(selectCurrency);
  return (
    <div>
      1 {coinData.symbol.toUpperCase()} = {formatCurrencyWithCommas(coinData.currentPrice[currency], currency)}
    </div>
  );
};
export default CoinOutput;
