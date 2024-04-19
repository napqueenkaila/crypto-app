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
import { CrosshairPlugin } from "chartjs-plugin-crosshair";
import { Bar } from "react-chartjs-2";
import { useAppSelector } from "@/app/redux/hooks";
import { selectCompareCoins } from "@/app/redux/features/selectedCoinsSlice";
import Legend from "./Legend";
import CompareCoinsLegend from "./CompareCoinsLegend";
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
  Filler,
  CrosshairPlugin
);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  
  width: 50%;
  height: 100%;
  background-color: ${({ theme }) => theme.charts.barBackgroundColor};
  border-radius: 12px;
`;

const Container = styled.div<{ $compareCoins: boolean }>`
  position: relative;
  height: 35vh;
  padding: 10px;
  padding-bottom: ${(props) => (props.$compareCoins ? "25px" : "0px")};
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
      <Container $compareCoins={compareCoins}>
        <Bar options={options} data={barChartData} />
      </Container>
      {compareCoins && (
        <CompareCoinsLegend coinOne={coinOne.name} coinTwo={coinTwo.name} />
      )}
    </Wrapper>
  );
};

export default BarChart;
