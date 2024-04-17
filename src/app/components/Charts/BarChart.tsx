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
import { useAppSelector } from "@/app/redux/hooks";
import { selectCompareCoins } from "@/app/redux/features/selectedCoinsSlice";
import Legend from "./Legend";
import { options } from "./options";
import {
  formatChartData,
  getChartLabels,
  getChartBackgroundColor,
} from "./utils";

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
  coinTwo,
  chartDataOne,
  chartDataTwo,
  todaysDate,
}: {
  coinOne: { [key: string]: string };
  coinTwo: { [key: string]: string };
  chartDataOne: number[][];
  chartDataTwo: number[][];
  todaysDate: string;
}) => {
  const theme = useTheme();
  const compareCoins = useAppSelector(selectCompareCoins);
  const barChartLabels = getChartLabels(chartDataOne);

  const datasets = [
    {
      label: coinOne.name,
      data: formatChartData(chartDataOne),
      backgroundColor: getChartBackgroundColor("one"),
      barThickness: 20,
      borderRadius: 4,
    },
  ];

  if (chartDataTwo) {
    datasets.push({
      label: coinTwo.name,
      data: formatChartData(chartDataTwo),
      backgroundColor: getChartBackgroundColor("two"),
      barThickness: 20,
      borderRadius: 4,
    });
  }

  if (!compareCoins && datasets.length > 1) {
    datasets.pop();
  }

  const barChartData = {
    labels: barChartLabels,
    datasets: datasets,
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
