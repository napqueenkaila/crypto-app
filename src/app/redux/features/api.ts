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
      query: () => "coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=true&price_change_percentage=1hr"
    })
  }),
});

export const {
  useGetMarketDataQuery,
  useGetSearchDataQuery,
  useGetLineChartDataQuery,
  useGetBarChartDataQuery,
  useGetTableDataQuery
} = api;
