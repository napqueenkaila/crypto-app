import { createSlice } from "@reduxjs/toolkit";

interface SelectedCoinsState{
    coinOne: {id: string, name: string, symbol: string};
    coinTwo: string;
}

const initialState: SelectedCoinsState = {
    coinOne: {id: "bitcoin", name: "Bitcoin", symbol: "btc"},
    coinTwo: ""
};

const selectedCoinsSlice = createSlice({
    name: "selectedCoins",
    initialState,
    reducers: {
        setCoinOne: (state, action) => {
            state.coinOne = action.payload;
        }
    }
});

export const { setCoinOne } = selectedCoinsSlice.actions;

export const selectCoinOne = (state: any) => state.selectedCoins.coinOne;
export const selectCoinTwo = (state: any) => state.selectedCoins.coinTwo;
export default selectedCoinsSlice.reducer;