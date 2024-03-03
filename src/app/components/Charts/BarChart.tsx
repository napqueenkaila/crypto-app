import { useGetBarChartDataQuery } from "@/app/redux/features/api";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { formatDateLabel } from "./utils";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
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
        color: "#9b9ab6",
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
    },
  },
};

const BarChart = () => {
  const { data } = useGetBarChartDataQuery("");
  const barChartLabels = data?.volume.map((el) => formatDateLabel(el[0]));
  const barChartData = {
    labels: barChartLabels,
    datasets: [
      {
        label: "",
        data: data?.volume.map((el) => el[1]),
        borderColor: "#aaa",
        barThickness: 2,
      },
    ],
  };
  return <Bar options={options} data={barChartData}/>;
};

export default BarChart;
