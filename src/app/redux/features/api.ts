import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Data {
  active_cryptocurrencies: number;
  markets: number;
  total_volume: { [key: string]: number };
  total_market_cap: { [key: string]: number };
  market_cap_percentage: { [key: string]: number };
}

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.coingecko.com/api/v3/" }),
  endpoints: (builder) => ({
    getMarketData: builder.query({
      query: () => "global",
      transformResponse: (response: { data: Data }) => {
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
  }),
});

export const { useGetMarketDataQuery, useGetSearchDataQuery } = api;
