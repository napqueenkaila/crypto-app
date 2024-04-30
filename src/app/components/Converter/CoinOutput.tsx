import { useAppSelector } from "@/app/redux/hooks";
import { selectCurrency } from "@/app/redux/features/currencySlice";
import { formatCurrencyWithCommas } from "@/app/utils";
import { TableData } from "@/app/types/interfaces/api.interfaces";

const CoinOutput = ({ coinData }: { coinData: TableData }) => {
  const { currency } = useAppSelector(selectCurrency);

  return (
    <div>
      {coinData !== undefined
        ? `1 ${coinData.symbol.toUpperCase()} = ${formatCurrencyWithCommas(
            coinData.current_price,
            currency
          )}`
        : ""}
    </div>
  );
};
export default CoinOutput;
