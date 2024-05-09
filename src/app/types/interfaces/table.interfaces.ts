import { TableData } from "./api.interfaces";

export interface CoinRowProps {
  coinData: TableData;
}

export interface PercentBarProps {
  value1: number;
  value2: number;
}

export interface PercentChangeProps {
  percentChange: number;
}

export interface SmallChartProps {
  smallChartData: number[];
}