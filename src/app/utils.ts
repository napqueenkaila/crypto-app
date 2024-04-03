export const compactCurrencyFormatter = new Intl.NumberFormat("en-US", {
  notation: "compact",
  style: "currency",
  currency: "USD",
});

export const formatCurrencyWithCommas = (num: number, currency: string) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency,
    minimumFractionDigits: 0,
  });
  return formatter.format(num);
};

export const formatNumberWithCommas = (num: number) => {
  return new Intl.NumberFormat().format(num);
};
