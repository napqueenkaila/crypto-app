export const getChartLabels = (data: number[][]) => {
  return data.map((el: number[]) => {
    return new Intl.DateTimeFormat("en", {
      day: "2-digit",
      month: "short",
    }).format(el[0]);
  });
};

export const todaysDate = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
}).format(new Date(Date.now()));

export const formatChartData = (data: number[][]) => {
  return data?.map((el) => el[1]);
};

interface ChartColors {
  one: { [key: string]: string };
  two: { [key: string]: string };
}

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
