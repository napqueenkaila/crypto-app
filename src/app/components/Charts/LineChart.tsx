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
import { formatDateLabel, formatChartData } from "./utils";

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

const LineChart = ({
  coinOne,
  chartDataOne,
  chartDataTwo,
  todaysDate,
}: {
  coinOne: { [key: string]: string };
  chartDataOne: number[][];
  chartDataTwo: number[][];
  todaysDate: string;
}) => {
  const theme = useTheme();
  const lineChartLabels = chartDataOne.map((el) => formatDateLabel(el[0]));

  const datasets = [
    {
      label: "",
      data: formatChartData(chartDataOne),
      borderColor: "#7878fa",
      fill: true,
      borderWidth: 2,
      backgroundColor: (context) => {
        const ctx = context.chart.ctx;
        const gradient = ctx.createLinearGradient(0, 0, 0, 350);
        gradient.addColorStop(0, "rgba(116,116,242,0.6)");
        gradient.addColorStop(1, "rgba(116,116,242,0.01)");
        return gradient;
      },
    },
  ];

  if (chartDataTwo) {
    datasets.push({
      label: "",
      data: formatChartData(chartDataTwo),
      borderColor: "#D878FA",
      fill: true,
      borderWidth: 2,
      backgroundColor: (context) => {
        const ctx = context.chart.ctx;
        const gradient = ctx.createLinearGradient(0, 0, 0, 350);
        gradient.addColorStop(0, "rgba(231,114,255,0.6)");
        gradient.addColorStop(1, "rgba(231,114,255,0.01)");
        return gradient;
      },
    });
  }

  const lineChartData = {
    labels: lineChartLabels,
    datasets: datasets,
  };

  return (
    <Wrapper>
      <Legend chartType="line" todaysDate={todaysDate} coinOne={coinOne} />
      <Line
        style={{
          backgroundColor: theme.charts.lineBackgroundColor,
          borderRadius: "12px",
          padding: "24px",
        }}
        options={options}
        data={lineChartData}
      />
    </Wrapper>
  );
};

export default LineChart;
