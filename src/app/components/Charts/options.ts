export const options = {
  scales: {
    y: {
      display: false,
    },
    x: {
      display: true,
      ticks: {
        maxTicksLimit: 8,
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
      tension: 1,
    },
  },
};
