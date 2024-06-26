import { getLabelCallback } from "./utils";

export const lineOptions = {
  onHover: {} as any,
  responsive: true,
  maintainAspectRatio: false,
  interaction: {
    intersect: false,
    mode: "x" as "x",
  },
  plugins: {
    legend: {
      display: false,
    },
    crosshair: {
      line: { color: "#FFF", width: 1 },
      sync: { enabled: false },
    },
    tooltip: {
      backgroundColor: "rgba(0,0,0,0)",
      borderWidth: 0.3,
      intersect: false,
      position: "average",
      mode: "index",
      callbacks: {
        label: function (context: { dataset: { label: any; }; parsed: { y: number | bigint | null; }; }) {
          return getLabelCallback(context);
        },
      },
    },
  },
  scales: {
    y: {
      display: false,
    },
    x: {
      display: true,
      ticks: {
        color: "#9b9ab6",
      },
      grid: {
        display: false,
      },
    },
  },
  elements: {
    point: {
      radius: 0,
    },
    line: {
      tension: 0.5,
    },
  },
};

export const barOptions = {
  onHover: {} as any,
  responsive: true,
  maintainAspectRatio: false,
  interaction: {
    intersect: false,
    mode: "x" as "x",
  },
  plugins: {
    legend: {
      display: false,
    },
    crosshair: false,
    tooltip: {
      backgroundColor: "rgba(0,0,0,0)",
      borderWidth: 0.3,
      intersect: false,
      callbacks: {
        label: function (context: { dataset: { label: any; }; parsed: { y: number | bigint | null; }; }) {
          return getLabelCallback(context);
        },
      },
    },
  },
  scales: {
    y: {
      display: false,
    },
    x: {
      stacked: true,
      display: true,
      ticks: {
        color: "#9b9ab6",
      },
      grid: {
        display: false,
      },
    },
  },
  elements: {
    line: {
      tension: 0.5,
    },
  },
};
