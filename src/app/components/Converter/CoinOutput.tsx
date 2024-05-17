import { useAppSelector } from "@/app/redux/hooks";
import { selectCurrency } from "@/app/redux/features/currencySlice";
import { formatCurrencyWithCommas } from "@/app/utils";
import { TableData } from "@/app/types/interfaces/api.interfaces";
import {
  OutputDiv,
  StyledSpan,
} from "@/app/styling/components/Converter/styled.CoinOutput";

const CoinOutput = ({ coinData }: { coinData: TableData }) => {
  const { currency } = useAppSelector(selectCurrency);

  return (
    <OutputDiv>
      {coinData !== undefined ? (
        <>
          <StyledSpan>1 {coinData.symbol.toUpperCase()} = </StyledSpan>
          {formatCurrencyWithCommas(coinData.current_price, currency)}
        </>
      ) : (
        ""
      )}
    </OutputDiv>
  );
};
export default CoinOutput;
