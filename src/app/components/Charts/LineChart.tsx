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
} from "chart.js";
import { formatDateLabel } from "./utils";
import { options } from "./options";
import { Line } from "react-chartjs-2";
import styled from "styled-components";
import Legend from "./Legend";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
);

const Wrapper = styled.div`
width: 100%`;

const LineChart = () => {
  const { data } = useGetLineChartDataQuery("");
  const lineChartLabels = data?.prices.map((el) => formatDateLabel(el[0]));

  const lineChartData = {
    labels: lineChartLabels,
    datasets: [
      {
        label: "",
        data: data?.prices.map((el) => el[1]),
        borderColor: "#7878FA",
        fill: true,
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 350);
          gradient.addColorStop(0, "rgba(116,116,242,0.6)");
          gradient.addColorStop(1, "rgba(116,116,242,0.01)");
          return gradient;
        },
        borderWidth: 2,
      },
    ],
  };

  return (
    <Wrapper>
      <Legend chartType="line" />
      <Line options={options} data={lineChartData} />
    </Wrapper>
  );
};

export default LineChart;
