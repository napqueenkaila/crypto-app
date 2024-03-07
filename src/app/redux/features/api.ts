import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface MarketData {
  active_cryptocurrencies: number;
  markets: number;
  total_volume: { [key: string]: number };
  total_market_cap: { [key: string]: number };
  market_cap_percentage: { [key: string]: number };
}

interface LineData {
  prices: number[][];
}

interface BarData {
  total_volumes: number[][];
}

interface CoinData {
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

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.coingecko.com/api/v3/" }),
  endpoints: (builder) => ({
    getMarketData: builder.query({
      query: () => "global",
      transformResponse: (response: { data: MarketData }) => {
        return {
          activeCryptos: response.data.active_cryptocurrencies,
          exchange: response.data.markets,
          totalVolume: response.data.total_volume,
          totalMarketCap: response.data.total_market_cap,
          btcMarketCapPercent: response.data.market_cap_percentage.btc,
          ethMarketCapPercent: response.data.market_cap_percentage.eth,
        };
      },
    }),
    getSearchData: builder.query({
      query: (searchQuery) => `search?query=${searchQuery}`,
    }),
    getLineChartData: builder.query({
      query: () =>
        "coins/bitcoin/market_chart?vs_currency=usd&days=180&interval=daily",
      transformResponse: (response: LineData) => {
        return {
          prices: response.prices,
        };
      },
    }),
    getBarChartData: builder.query({
      query: () =>
        "coins/bitcoin/market_chart?vs_currency=usd&days=180&interval=daily",
      transformResponse: (response: BarData) => {
        return {
          volume: response.total_volumes,
        };
      },
    }),
    getTableData: builder.query({
      query: () =>
        "coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d&locale=en",
      transformResponse: (response: []) => {
        const tableData: any[] = response.map((coin: CoinData) => {
          return {
            id: coin.id,
            name: coin.name,
            symbol: coin.symbol,
            image: coin.image,
            rank: coin.market_cap_rank,
            currentPrice: coin.current_price,
            hourPriceChangePercent: coin.price_change_percentage_1h_in_currency,
            dayPriceChangePercent: coin.price_change_percentage_24h_in_currency,
            weekPriceChangePercent: coin.price_change_percentage_7d_in_currency,
            marketCap: coin.market_cap,
            totalVolume: coin.total_volume,
            circulatingSupply: coin.circulating_supply,
            totalSupply: coin.total_supply,
            sparkline: coin.sparkline_in_7d
          };
        });
        return tableData;
      }
    }),
  }),
});

export const {
  useGetMarketDataQuery,
  useGetSearchDataQuery,
  useGetLineChartDataQuery,
  useGetBarChartDataQuery,
  useGetTableDataQuery,
} = api;
