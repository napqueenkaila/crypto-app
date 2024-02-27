import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type Data = { activeCryptos: undefined | number };

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.coingecko.com/api/v3/" }),
  endpoints: (builder) => ({
    getMarketData: builder.query({
      query: () => "global",
      transformResponse: (response: { response: { data: Data } }) => {
        return {
          activeCryptos: response.data.active_cryptocurrencies,
          exchange: response.data.markets,
          totalVolume: response.data.total_volume["usd"],
          totalMarketCap: response.data.total_market_cap["usd"],
          btcMarketCapPercent: response.data.market_cap_percentage.btc,
          ethMarketCapPercent: response.data.market_cap_percentage.eth,
        };
      },
    }),
    getSearchData: builder.query({
      query: (searchQuery) => `search?query=${searchQuery}`,
    })
  }),
});

export const { useGetMarketDataQuery, useGetSearchDataQuery } = api;
