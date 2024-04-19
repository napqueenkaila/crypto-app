export const options = {
  responsive: true,
  maintainAspectRatio: false,
  interaction: {
    intersect: false,
    mode: "x" as "x",
  },
  plugins: {
    legend: {
      display: false
    },
    crosshair: {
      line: { color: "#FFF", width: 1 },
      sync: {enabled: false}
    },
    tooltip: {
      backgroundColor: "rgba(0,0,0,0)",
      borderWidth: 0.3,
      intersect: false,
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
    point: {
      radius: 0,
    },
    line: {
      tension: .5,
    },
  },
};
