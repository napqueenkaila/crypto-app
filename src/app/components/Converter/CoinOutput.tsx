import { selectCurrency } from "@/app/redux/features/currencySlice";
import { useAppSelector } from "@/app/redux/hooks";
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
      1 {coinData.symbol.toUpperCase()} = {coinData.currentPrice[currency]}
    </div>
  );
};
export default CoinOutput;
