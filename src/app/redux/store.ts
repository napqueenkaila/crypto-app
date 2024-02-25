import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./features/todo";
import { api } from "./features/api";

export const makeStore = () => {
  return configureStore({
    reducer: {
      todos: todosReducer,
      [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(api.middleware),
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
