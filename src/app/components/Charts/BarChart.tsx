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
import { CrosshairPlugin } from "chartjs-plugin-crosshair";
import { Bar } from "react-chartjs-2";
import { useAppSelector } from "@/app/redux/hooks";
import { selectCompareCoins } from "@/app/redux/features/selectedCoinsSlice";
import Legend from "./Legend";
import CompareCoinsLegend from "./CompareCoinsLegend";
import { barOptions } from "./options";
import {
  Wrapper,
  Container,
} from "@/app/styling/components/Charts/styled.Charts";
import { formatChartData, getChartLabels, getChartGradient } from "./utils";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Filler,
  CrosshairPlugin
);

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
  const compareCoins = useAppSelector(selectCompareCoins);
  const barChartLabels = getChartLabels(chartDataOne);

  const datasets = [
    {
      label: coinOne.name,
      data: formatChartData(chartDataOne),
      backgroundColor: getChartGradient("one"),
      barThickness: 20,
      borderRadius: 4,
    },
  ];

  if (chartDataTwo) {
    datasets.push({
      label: coinTwo.name,
      data: formatChartData(chartDataTwo),
      backgroundColor: getChartGradient("two"),
      barThickness: 20,
      borderRadius: 4,
    });
  }

  if (!compareCoins && datasets.length > 1) {
    datasets.pop();
  }

  return (
    <Wrapper>
      <Legend coinOne={coinOne} chartType="bar" todaysDate={todaysDate} />
      <Container $compareCoins={compareCoins}>
        <Bar
          options={barOptions}
          data={{ labels: barChartLabels, datasets: datasets }}
        />
      </Container>
      {compareCoins && (
        <CompareCoinsLegend coinOne={coinOne.name} coinTwo={coinTwo.name} />
      )}
    </Wrapper>
  );
};

export default BarChart;
