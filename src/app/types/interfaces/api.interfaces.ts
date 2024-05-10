export interface MarketData {
  active_cryptocurrencies: number;
  markets: number;
  total_volume: { [key: string]: number };
  total_market_cap: { [key: string]: number };
  market_cap_percentage: { [key: string]: number };
}

export interface TableData {
  id: string;
  name: string;
  symbol: string;
  image: string;
  market_cap_rank: number;
  current_price: number;
  price_change_percentage_1h_in_currency: number;
  price_change_percentage_24h_in_currency: number;
  price_change_percentage_7d_in_currency: number;
  market_cap: number;
  total_volume: number;
  circulating_supply: number;
  total_supply: number;
  sparkline_in_7d: { price: number[] };
}

export interface CoinData {
  id: string;
  name: string;
  symbol: string;
  image: { thumb: string };
  links: { homepage: string[]; blockchain_site: string[] };
  description: { en: string };
  market_data: {
    ath: Record<string, number>;
    ath_date: Record<string, string>;
    atl: Record<string, number>;
    atl_date: Record<string, string>;
    market_cap: Record<string, number>;
    fully_diluted_valuation: Record<string, number>;
    total_volume: Record<string, number>;
    total_supply: number;
    circulating_supply: number;
    max_supply: number;
    current_price: Record<string, number>;
    price_change_percentage_24h: Record<string, number>;
  };
}

export interface CarouselData {
  id: string;
  name: string;
  symbol: string;
  image: string;
  current_price: number;
  price_change_percentage_24h: number;
}

export interface HistoricalData {
  [key: string]: Record<string, number>;
}