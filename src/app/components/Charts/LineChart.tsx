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
import { CrosshairPlugin } from "chartjs-plugin-crosshair";
import { Line } from "react-chartjs-2";
import { useAppSelector } from "@/app/redux/hooks";
import { selectCompareCoins } from "@/app/redux/features/selectedCoinsSlice";
import Legend from "./Legend";
import CompareCoinsLegend from "./CompareCoinsLegend";
import { options } from "./options";
import {
  Wrapper,
  Container,
} from "@/app/styling/components/Charts/styled.Charts";
import {
  formatChartData,
  getChartLabels,
  getChartBackgroundColor,
} from "./utils";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  CrosshairPlugin
);

const LineChart = ({
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
  const lineChartLabels = getChartLabels(chartDataOne);

  const datasets = [
    {
      label: coinOne.name,
      data: formatChartData(chartDataOne),
      borderColor: "#7878fa",
      fill: true,
      borderWidth: 2,
      backgroundColor: getChartBackgroundColor("one"),
    },
  ];

  if (chartDataTwo) {
    datasets.push({
      label: coinTwo.name,
      data: formatChartData(chartDataTwo),
      borderColor: "#D878FA",
      fill: true,
      borderWidth: 2,
      backgroundColor: getChartBackgroundColor("two"),
    });
  }

  if (!compareCoins && datasets.length > 1) {
    datasets.pop();
  }

  const lineChartData = {
    labels: lineChartLabels,
    datasets: datasets,
  };

  return (
    <Wrapper>
      <Legend chartType="line" todaysDate={todaysDate} coinOne={coinOne} />
      <Container $compareCoins={compareCoins}>
        <Line options={options} data={lineChartData} />
      </Container>
      {compareCoins && (
        <CompareCoinsLegend coinOne={coinOne.name} coinTwo={coinTwo.name} />
      )}
    </Wrapper>
  );
};

export default LineChart;
