import { createSlice } from "@reduxjs/toolkit";
import { SelectedCoinsState } from "@/app/types/interfaces/sliceState.interfaces";

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
      if (state.coinOne.id !== "" && state.coinTwo.id !== "") {
        state.compareCoins = true;
      } else {
        state.compareCoins = false;
      }
    },
    setCoinTwo: (state, action) => {
      state.coinTwo = action.payload;
      if (state.coinOne.id !== "" && state.coinTwo.id !== "") {
        state.compareCoins = true;
      } else {
        state.compareCoins = false;
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
