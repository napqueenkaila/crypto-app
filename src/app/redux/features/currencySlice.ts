import { createSlice } from "@reduxjs/toolkit";
import { CurrencyState } from "@/app/types/interfaces/sliceState.interfaces";

const initialState: CurrencyState = {
  currency: "usd",
};

const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    setCurrency: (state, action) => {
      state.currency = action.payload;
    },
  },
});

export const { setCurrency } = currencySlice.actions;
export const selectCurrency = (state: any) => state.currency;
export default currencySlice.reducer;
