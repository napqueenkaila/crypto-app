import { formatCompactCurrency, formatCurrencyWithCommas } from "@/app/utils";
import { ChartColors } from "@/app/types/interfaces/charts.interfaces";

export const getChartLabels = (data: number[][]) => {
  return data.map((el: number[]) => {
    return new Intl.DateTimeFormat("en", {
      day: "2-digit",
      month: "short",
    }).format(el[0]);
  });
};

export const formatChartData = (data: number[][]) => {
  return data?.map((el) => el[1]);
};

const chartColors: ChartColors = {
  one: { start: "rgba(116,116,242,0.6) ", end: "rgba(116,116,242,0.01)" },
  two: { start: "rgba(231,114,255,0.6) ", end: "rgba(231,114,255,0.01)" },
};

export const getChartGradient =
  (type: string) => (context: { chart: { ctx: any } }) => {
    const ctx = context.chart.ctx;
    const gradient = ctx.createLinearGradient(0, 0, 0, 350);
    gradient.addColorStop(0, chartColors[type as keyof ChartColors].start);
    gradient.addColorStop(1, chartColors[type as keyof ChartColors].end);
    return gradient;
  };

export const getLegendValue = (data: number[][], index: number) => {
  const formattedData = formatChartData(data);
  return Number(
    formattedData?.[index].toFixed(3) || formattedData?.slice(-1)[0].toFixed(3)
  );
};

export const getLegendDate = (data: number[][], index: number) => {
  return new Intl.DateTimeFormat("en", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(data[index][0]);
};

export const getLabelCallback = (context: {
  dataset: { label: any };
  parsed: { y: number | bigint | null };
}) => {
  let label = context.dataset.label;
  if (label) label += ": ";
  if (context.parsed.y !== null) {
    if (context.parsed.y >= 100000) {
      label += formatCompactCurrency(context.parsed.y, "USD");
    } else {
      label += formatCurrencyWithCommas(context.parsed.y, "USD");
    }
  }
  return label;
};

export const getRangeValue = (range: string) => {
  let rangeValue;
  switch (range) {
    case "1D":
      rangeValue = 1;
      break;
    case "7D":
      rangeValue = 7;
      break;
    case "14D":
      rangeValue = 14;
      break;
    case "1M":
      rangeValue = 30;
      break;
    case "1Y":
      rangeValue = 365;
      break;
  }
  return rangeValue;
};