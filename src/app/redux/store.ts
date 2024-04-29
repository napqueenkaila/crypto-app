import { configureStore } from "@reduxjs/toolkit";
import { api } from "./features/api";
import hasMoreReducer from "./features/hasMoreSlice";
import currencyReducer from "./features/currencySlice";
import darkModeReducer from "./features/darkModeSlice";
import selectedCoinsReducer from "./features/selectedCoinsSlice";
import converterCoinsReducer from "./features/converterCoinsSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      [api.reducerPath]: api.reducer,
      hasMore: hasMoreReducer,
      currency: currencyReducer,
      darkMode: darkModeReducer,
      selectedCoins: selectedCoinsReducer,
      converterCoins: converterCoinsReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(api.middleware),
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
