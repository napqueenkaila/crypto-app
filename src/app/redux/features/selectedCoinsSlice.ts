import { createSlice } from "@reduxjs/toolkit";

interface SelectedCoinsState {
  coinOne: { id: string; name: string; symbol: string };
  coinTwo: { id: string; name: string; symbol: string };
  compareCoins: boolean;
}

const initialState: SelectedCoinsState = {
  coinOne: { id: "bitcoin", name: "Bitcoin", symbol: "btc" },
  coinTwo: { id: "", name: "", symbol: "" },
  compareCoins: false,
};

const selectedCoinsSlice = createSlice({
  name: "selectedCoins",
  initialState,
  reducers: {
    setCoinOne: (state, action) => {
      state.coinOne = action.payload;
      if (state.coinOne && state.coinTwo) {
        state.compareCoins = true;
      }
    },
    setCoinTwo: (state, action) => {
      state.coinTwo = action.payload;
      if (state.coinOne && state.coinTwo) {
        state.compareCoins = true;
      }
    },
  },
});

export const { setCoinOne, setCoinTwo } = selectedCoinsSlice.actions;

export const selectCoinOne = (state: any) => state.selectedCoins.coinOne;
export const selectCoinTwo = (state: any) => state.selectedCoins.coinTwo;
export const selectCompareCoins = (state: any) =>
  state.selectedCoins.compareCoins;
export default selectedCoinsSlice.reducer;
