import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { TableData } from "@/app/redux/features/api";
import {
  formatChartData,
  getChartGradient,
  getChartLabels,
} from "../Charts/utils";
import { lineOptions } from "../Charts/options";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler
);

const Chart = ({
  fromCoin,
  fromCoinData,
  toCoin,
  toCoinData,
}: {
  fromCoin: TableData;
  fromCoinData: number[][];
  toCoin: TableData;
  toCoinData: number[][];
}) => {
  const chartLabels = getChartLabels(fromCoinData);
  const datasets = [
    {
      label: fromCoin.name,
      data: formatChartData(fromCoinData),
      borderColor: "#7878fa",
      fill: true,
      borderWidth: 2,
      backgroundColor: getChartGradient("one"),
    },
    {
      label: toCoin.name,
      data: formatChartData(toCoinData),
      borderColor: "#D878FA",
      fill: true,
      borderWidth: 2,
      backgroundColor: getChartGradient("two"),
    },
  ];

  return (
    <div>
      <Line
        options={lineOptions}
        data={{ labels: chartLabels, datasets: datasets }}
      />
    </div>
  );
};

export default Chart;
