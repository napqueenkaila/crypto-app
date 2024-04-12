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
  selectedCoin,
  chartData,
  todaysDate,
}: {
  selectedCoin: string;
  chartData: number[][];
  todaysDate: string;
}) => {
  const theme = useTheme();
  const barChartLabels = chartData.map((el) => formatDateLabel(el[0]));
  const barChartData = {
    labels: barChartLabels,
    datasets: [
      {
        label: "",
        data: chartData.map((el) => el[1]),
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
      <Legend
        selectedCoin={selectedCoin}
        chartType="bar"
        todaysDate={todaysDate}
      />
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
