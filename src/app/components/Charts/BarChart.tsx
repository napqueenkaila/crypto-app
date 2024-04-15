import styled, { useTheme } from "styled-components";
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
import { formatDateLabel } from "./utils";
import { options } from "./options";
import Legend from "./Legend";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Filler
);

const Wrapper = styled.div`
  position: relative;
  width: 50%;
  height: 100%;
`;

const BarChart = ({
  coinOne,
  chartDataOne,
  todaysDate,
}: {
  coinOne: { [key: string]: string };
  chartDataOne: number[][];
  todaysDate: string;
}) => {
  const theme = useTheme();
  const barChartLabels = chartDataOne.map((el) => formatDateLabel(el[0]));
  const barChartData = {
    labels: barChartLabels,
    datasets: [
      {
        label: "",
        data: chartDataOne.map((el) => el[1]),
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 350);
          gradient.addColorStop(0, "rgba(157,98,217,1)");
          gradient.addColorStop(1, "rgba(179,116,242,0.01)");
          return gradient;
        },
        barThickness: 2,
        borderRadius: 4,
      },
    ],
  };

  return (
    <Wrapper>
      <Legend coinOne={coinOne} chartType="bar" todaysDate={todaysDate} />
      <Bar
        style={{
          backgroundColor: theme.charts.barBackgroundColor,
          borderRadius: "12px",
          padding: "24px",
        }}
        options={options}
        data={barChartData}
      />
    </Wrapper>
  );
};

export default BarChart;
