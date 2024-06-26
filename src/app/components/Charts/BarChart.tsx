import { useState } from "react";
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
import CompareCoinsLegend from "./CompareCoinsLegend";
import { barOptions } from "./options";
import {
  formatChartData,
  getChartLabels,
  getChartGradient,
  getLegendValue,
  getLegendDate,
} from "./utils";
import {
  Wrapper,
  Container,
} from "@/app/styling/components/Charts/styled.Charts";
import { ChartProps } from "@/app/types/interfaces/charts.interfaces";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Filler
);

const BarChart = ({
  coinOne,
  coinTwo,
  chartDataOne,
  chartDataTwo,
}: ChartProps) => {
  const compareCoins = useAppSelector(selectCompareCoins);
  const [volumeIndex, setVolumeIndex] = useState(chartDataOne?.length - 1);
  const [dateIndex, setDateIndex] = useState(chartDataOne?.length - 1);
  const barChartLabels = getChartLabels(chartDataOne);

  barOptions.onHover = (event: any, price: any) => {
    if (price[0]?.index !== undefined) {
      setVolumeIndex(price[0]?.index);
      setDateIndex(price[0]?.index);
    }
  };

  const datasets = [
    {
      label: coinOne.name,
      data: formatChartData(chartDataOne),
      backgroundColor: getChartGradient("one"),
      barThickness: 20,
      borderRadius: 4,
      hoverBackgroundColor: "rgba(116,116,242,1)",
    },
  ];

  if (chartDataTwo) {
    datasets.unshift({
      label: coinTwo.name,
      data: formatChartData(chartDataTwo),
      backgroundColor: getChartGradient("two"),
      barThickness: 20,
      borderRadius: 4,
      hoverBackgroundColor: "rgba(231,114,255,1)",
    });
  }

  if (!compareCoins && datasets.length > 1) {
    datasets.pop();
  }

  return (
    <Wrapper>
      <Legend
        coinOne={coinOne}
        chartType="bar"
        legendValue={getLegendValue(chartDataOne, volumeIndex)}
        legendDate={getLegendDate(chartDataOne, dateIndex)}
      />
      <Container $compareCoins={compareCoins}>
        <Bar
          options={barOptions}
          data={{ labels: barChartLabels, datasets: datasets }}
        />
      </Container>
      {compareCoins && (
        <CompareCoinsLegend
          coinOne={coinOne.name}
          coinTwo={coinTwo.name}
          legendValueOne={getLegendValue(chartDataOne, volumeIndex)}
          legendValueTwo={getLegendValue(chartDataTwo, volumeIndex)}
        />
      )}
    </Wrapper>
  );
};

export default BarChart;
