import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { toggleHasMore } from "./hasMoreSlice";
import {
  MarketData,
  TableData,
  CoinData,
  CarouselData,
  HistoricalData,
} from "@/app/types/interfaces/api.interfaces";

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
    getChartData: builder.query({
      query: ({
        currency,
        selectedCoinId,
        selectedDays,
      }: {
        currency: string;
        selectedCoinId: string;
        selectedDays: number;
      }) =>
        `coins/${selectedCoinId}/market_chart?vs_currency=${currency}&days=${selectedDays}&interval=daily`,
    }),
    getTableData: builder.query({
      query: ({ page, currency }) =>
        `coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=50&page=${page}&sparkline=true&price_change_percentage=1h%2C24h%2C7d&locale=en`,
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
        const {
          id,
          name,
          symbol,
          image,
          links: { homepage, blockchain_site },
          description,
          market_data: {
            ath,
            ath_date,
            atl,
            atl_date,
            market_cap,
            fully_diluted_valuation,
            total_supply,
            total_volume,
            circulating_supply,
            max_supply,
            current_price,
            price_change_percentage_24h,
          },
        } = response;
        return {
          id,
          name,
          symbol,
          image,
          links: { homepage, blockchain_site },
          description,
          market_data: {
            ath,
            ath_date,
            atl,
            atl_date,
            market_cap,
            fully_diluted_valuation,
            total_supply,
            total_volume,
            circulating_supply,
            max_supply,
            current_price,
            price_change_percentage_24h,
          },
        };
      },
    }),
    getCarouselData: builder.query({
      query: (currency) =>
        `coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=50&page=1&sparkline=false&price_change_percentage=24h&locale=en&precision=2`,
      transformResponse: (response: []) => {
        const carouselData: CarouselData[] = response.map(
          (coin: CarouselData) => {
            return {
              id: coin.id,
              name: coin.name,
              symbol: coin.symbol,
              image: coin.image,
              current_price: coin.current_price,
              price_change_percentage_24h: coin.price_change_percentage_24h,
            };
          }
        );
        return carouselData;
      },
    }),
    getConverterCoinsData: builder.query({
      query: (coinId) =>
        `coins/${coinId}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`,
      transformResponse: (response: CoinData) => {
        return {
          id: response.id,
          name: `${response.name} (${response.symbol.toUpperCase()})`,
          symbol: response.symbol,
          image: response.image.thumb,
          currentPrice: response.market_data.current_price,
        };
      },
    }),
    getCoinHistoryData: builder.query({
      query: ({ coinId, date }) => `coins/${coinId}/history?date=${date}`,
      transformResponse: (response: HistoricalData) => {
        return {
          historicalData: response.market_data,
        };
      },
    }),
  }),
});

export const {
  useGetMarketDataQuery,
  useGetSearchDataQuery,
  useGetChartDataQuery,
  useLazyGetChartDataQuery,
  useGetTableDataQuery,
  useGetCoinDataQuery,
  useGetCarouselDataQuery,
  useGetConverterCoinsDataQuery,
  useGetCoinHistoryDataQuery,
} = api;
