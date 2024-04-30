export interface CoinStatsProps {
  market_cap: Record<string, number>;
  fully_diluted_valuation: Record<string, number>;
  total_volume: Record<string, number>;
  circulating_supply: number;
  max_supply: number;
  total_supply: number;
}

export interface CoinProfitProps {
  current_price: Record<string, number>;
  ath: Record<string, number>;
  ath_date: Record<string, string>;
  atl: Record<string, number>;
  atl_date: Record<string, string>;
}