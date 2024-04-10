export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false
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
      tension: .5,
    },
  },
};
