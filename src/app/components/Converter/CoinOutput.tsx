import { useAppSelector } from "@/app/redux/hooks";
import { selectCurrency } from "@/app/redux/features/currencySlice";
import { formatCurrencyWithCommas } from "@/app/utils";
import { TableData } from "@/app/redux/features/api";
import styled from "styled-components";

const OutputDiv = styled.div`
  font-weight: 400;
  margin: 20px 10px 10px; 
  color: #FFFFFFCC;
`;

const CoinOutput = ({ coinData }: { coinData: TableData }) => {
  const { currency } = useAppSelector(selectCurrency);

  return (
    <OutputDiv>
      {coinData !== undefined
        ? `1 ${coinData.symbol.toUpperCase()} = ${formatCurrencyWithCommas(
            coinData.current_price,
            currency
          )}`
        : ""}
    </OutputDiv>
  );
};
export default CoinOutput;
