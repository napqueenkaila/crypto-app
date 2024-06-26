export const formatCompactCurrency = (
  num: number | bigint,
  currency: string
) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    notation: "compact",
    currency: currency,
  });
  return formatter.format(num);
};

export const formatCurrencyWithCommas = (
  num: number | bigint,
  currency: string
) => {
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

export const formatAllTimeDate = (dateStr: string): string => {
  const date = new Date(dateStr);
  const options: Intl.DateTimeFormatOptions = {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZoneName: "short",
  };
  const formatter = new Intl.DateTimeFormat("en-US", options);
  return formatter.format(date);
};

export const formatDate = (dateString: string) => {
  const dateParts = dateString.split("-");
  return `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`;
};
