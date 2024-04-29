import { createSlice } from "@reduxjs/toolkit";
import { TableData, api } from "./api";

interface ConverterCoinsState {
  value: TableData[];
}

const initialState: ConverterCoinsState = {
  value: []
};

const converterCoinsSlice = createSlice({
  name: "converterCoins",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      api.endpoints.getTableData.matchFulfilled,
      (state, action) => {
        state.value = action.payload;
      }
    );
  },
});

export const selectConverterCoins = (state: any) => state.converterCoins.value;
export default converterCoinsSlice.reducer;
