import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { toggleHasMore } from "./hasMoreSlice";

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

interface TableData {
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

interface CoinData {
  id: string;
  name: string;
  symbol: string;
  image: { thumb: string };
  links: { homepage: string[]; blockchain_site: string[] };
  description: { en: string };
  market_data: {
    ath: {};
    ath_date: {};
    atl: {};
    atl_date: {};
    market_cap: {};
    fully_diluted_valuation: {};
    total_volume: {};
    total_supply: {};
    circulating_supply: {};
    max_supply: {};
  };
}

const apiKey: string = process.env.NEXT_PUBLIC_API_KEY!;

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.coingecko.com/api/v3/",
    mode: "cors",
    prepareHeaders(headers) {
      headers.set("x-cg-demo-api-key", apiKey);
      headers.set("Access-Control-Allow-Origin", "*");
      return headers;
    },
    credentials: "same-origin",
  }),
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
      query: (currency: string) =>
        `coins/bitcoin/market_chart?vs_currency=${currency}&days=180&interval=daily`,
      transformResponse: (response: LineData) => {
        return {
          prices: response.prices,
        };
      },
    }),
    getBarChartData: builder.query({
      query: (currency:string) =>
        `coins/bitcoin/market_chart?vs_currency=${currency}&days=180&interval=daily`,
      transformResponse: (response: BarData) => {
        return {
          volume: response.total_volumes,
        };
      },
    }),
    getTableData: builder.query({
      query: (page) =>
        `coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=${page}&sparkline=true&price_change_percentage=1h%2C24h%2C7d&locale=en`,
      async onQueryStarted(page, { dispatch, queryFulfilled }) {
        try {
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const { data } = await queryFulfilled;
        } catch (err) {
          dispatch(toggleHasMore());
        }
      },
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      merge: (currentCache, newItems) => {
        currentCache.push(...newItems);
      },
      forceRefetch: ({ currentArg, previousArg }) => {
        return currentArg !== previousArg;
      },
      transformResponse: (response: []) => {
        const tableData: TableData[] = response.map((coin: TableData) => {
          return {
            id: coin.id,
            name: coin.name,
            symbol: coin.symbol,
            image: coin.image,
            market_cap_rank: coin.market_cap_rank,
            current_price: Number(coin.current_price.toFixed(0)),
            price_change_percentage_1h_in_currency:
              coin.price_change_percentage_1h_in_currency,
            price_change_percentage_24h_in_currency:
              coin.price_change_percentage_24h_in_currency,
            price_change_percentage_7d_in_currency:
              coin.price_change_percentage_7d_in_currency,
            market_cap: coin.market_cap,
            total_volume: coin.total_volume,
            circulating_supply: coin.circulating_supply,
            total_supply: coin.total_supply,
            sparkline_in_7d: coin.sparkline_in_7d,
          };
        });
        return tableData;
      },
    }),
    getCoinData: builder.query({
      query: (coinId) =>
        `coins/${coinId}?localization=false&tickers=false&market_data=true&community_data=true&developer_data=false&sparkline=false`,
      transformResponse: (response: CoinData) => {
        return {
          id: response.id,
          name: response.name,
          symbol: response.symbol,
          image: response.image.thumb,
          links: response.links,
          description: response.description,
          market_data: response.market_data,
        };
      },
    }),
  }),
});

export const {
  useGetMarketDataQuery,
  useGetSearchDataQuery,
  useGetLineChartDataQuery,
  useGetBarChartDataQuery,
  useGetTableDataQuery,
  useGetCoinDataQuery,
} = api;
