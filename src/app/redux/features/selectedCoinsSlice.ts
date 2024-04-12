import { createSlice } from "@reduxjs/toolkit";

interface SelectedCoinsState{
    coinOne: string;
    coinTwo: string;
}

const initialState: SelectedCoinsState = {
    coinOne: "bitcoin",
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