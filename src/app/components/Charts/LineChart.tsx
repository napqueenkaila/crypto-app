import styled, { useTheme } from "styled-components";
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
import Legend from "./Legend";
import { options } from "./options";
import { formatDateLabel } from "./utils";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler
);

const Wrapper = styled.div`
  position: relative;
  width: 50%;
  height: 100%;
`;

const LineChart = ({ selectedCoin, chartData, todaysDate }: { selectedCoin: string; chartData:number[][],todaysDate:string}) => {
  const theme = useTheme();
  const lineChartLabels = chartData.map((el) => formatDateLabel(el[0]));

  const lineChartData = {
    labels: lineChartLabels,
    datasets: [
      {
        label: "",
        data: chartData.map((el) => el[1]),
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
      <Legend chartType="line" todaysDate={todaysDate} selectedCoin={selectedCoin} />
      <Line
        style={{ backgroundColor: theme.charts.lineBackgroundColor, borderRadius: "12px", padding: "24px" }}
        options={options}
        data={lineChartData}
      />
    </Wrapper>
  );
};

export default LineChart;
