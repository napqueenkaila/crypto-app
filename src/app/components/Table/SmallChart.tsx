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
import styled from "styled-components";
import { SmallChartProps } from "@/app/types/interfaces/table.interfaces";

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
  height: 37px;
`;

const SmallChart = ({ smallChartData }: SmallChartProps) => {
  const getDateTimeArray = () => {
    const currentDate = new Date();
    const dateTimeArray = [];
    for (let i = 0; i < 168; i++) {
      const dateTime = new Date(currentDate.getTime() - i * 60 * 60 * 1000);
      dateTimeArray.push(dateTime);
    }
    return dateTimeArray;
  };

  const smallChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        display: false,
      },
      x: {
        display: false,
      },
    },
    elements: {
      line: {
        tension: 0.5,
      },
      point: {
        radius: 0,
      },
    },
  };

  const chartData = {
    labels: getDateTimeArray(),
    datasets: [
      {
        label: "",
        data: smallChartData,
        borderColor: "#C27721",
        borderWidth: 2,
        fill: true,
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 350);
          gradient.addColorStop(0, "rgba(194, 119, 33, 1)");
          gradient.addColorStop(1, "rgba(35, 35, 54, 0)");
          return gradient;
        },
      },
    ],
  };

  return (
    <Wrapper>
      <Line options={smallChartOptions} data={chartData} />
    </Wrapper>
  );
};

export default SmallChart;
