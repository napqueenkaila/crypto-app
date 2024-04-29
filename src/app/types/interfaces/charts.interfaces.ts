export interface ChartProps {
  coinOne: { [key: string]: string };
  coinTwo: { [key: string]: string };
  chartDataOne: number[][];
  chartDataTwo: number[][];
}

export interface LegendProps {
  chartType: string;
  coinOne: { [key: string]: string };
  legendValue: number;
  legendDate: string;
}

export interface CompareCoinsProps {
  coinOne: string;
  coinTwo: string;
  legendValueOne: number;
  legendValueTwo: number;
}

export interface RangeBarProps {
  handleChange: (e: any) => void;
  selectedDays: number;
}

export interface ChartColors {
  one: { [key: string]: string };
  two: { [key: string]: string };
}