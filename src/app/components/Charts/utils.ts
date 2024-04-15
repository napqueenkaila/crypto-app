export const formatDateLabel = (date: number) => {
  return new Intl.DateTimeFormat("en", {
    day: "2-digit",
    month: "short",
  }).format(date);
};

export const todaysDate = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
}).format(new Date(Date.now()));

export const formatChartData = (data: number[][]) => {
  return data.map((el) => el[1]);
};
