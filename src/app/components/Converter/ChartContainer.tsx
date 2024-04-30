import { useState } from "react";
import { useAppSelector } from "@/app/redux/hooks";
import { selectCurrency } from "@/app/redux/features/currencySlice";
import { TableData, useGetChartDataQuery } from "@/app/redux/features/api";
import Chart from "./Chart";
import RangeBar from "../Charts/RangeBar";

const ChartContainer = ({
  fromCoin,
  toCoin,
}: {
  fromCoin: TableData;
  toCoin: TableData;
}) => {
  const { currency } = useAppSelector(selectCurrency);
  const [selectedRange, setSelectedRange] = useState(7);
  const { data: fromCoinData, isSuccess } = useGetChartDataQuery({
    currency,
    selectedCoinId: fromCoin.id,
    selectedDays: selectedRange,
  });
  const { data: toCoinData } = useGetChartDataQuery({
    currency,
    selectedCoinId: toCoin.id,
    selectedDays: selectedRange,
  });

  const handleRangeChange = (e: { target: { value: any; }; }) => {
    const newRange = Number(e.target.value);
    setSelectedRange(newRange);
  };

  return (
    <div>
      {isSuccess && (
        <Chart
          fromCoin={fromCoin}
          fromCoinData={fromCoinData.prices}
          toCoin={toCoin}
          toCoinData={toCoinData.prices}
        />
      )}
      <RangeBar handleChange={handleRangeChange} selectedDays={selectedRange} />
    </div>
  );
};
export default ChartContainer;
