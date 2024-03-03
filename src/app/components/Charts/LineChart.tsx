import { useGetLineChartDataQuery } from "@/app/redux/features/api";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { formatDateLabel } from "./utils";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const options = {
  scales: {
    y: {
      display: false,
    },
    x: {
      display: true,
      ticks: {
        maxTicksLimit: 8,
        color: "#9b9ab6"
      },
      grid: {
        display: false,
      },
    },
  },
  elements: {
    point: {
      radius: 0,
    },
    line: {
      tension: 1,
    }
  }
};

const LineChart = () => {
  const { data } = useGetLineChartDataQuery("");
  const lineChartLabels = data?.prices.map((el) => formatDateLabel(el[0]));

  const lineChartData = {
    labels: lineChartLabels,
    datasets: [
      {
        label: "",
        data: data?.prices.map((el) => el[1]),
        borderColor: "#aaa",
      },
    ],
  };

  return <Line options={options} data={lineChartData} />;
};

export default LineChart;
