import styled from "styled-components";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Filler,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { options } from "./options";
import { formatDateLabel } from "./utils";
import { useGetBarChartDataQuery } from "@/app/redux/features/api";
import Legend from "./Legend";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Filler,
);

const Wrapper = styled.div`
  width: 100%;
`;

const BarChart = () => {
  const { data } = useGetBarChartDataQuery("");
  const barChartLabels = data?.volume.map((el) => formatDateLabel(el[0]));
  const barChartData = {
    labels: barChartLabels,
    datasets: [
      {
        label: "",
        data: data?.volume.map((el) => el[1]),
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 350);
          gradient.addColorStop(0, "rgba(157,98,217,1)");
          gradient.addColorStop(1, "rgba(179,116,242,0.01)");
          return gradient;
        },
        barThickness: 2,
        borderRadius: 4
      },
    ],
  };
  return (
    <Wrapper>
      <Legend chartType="bar" />
      <Bar
        options={options}
        data={barChartData}
      />
    </Wrapper>
  );
};

export default BarChart;
