import { createSlice } from "@reduxjs/toolkit";

interface CurrencyState {
    currency: string;
}

const initialState: CurrencyState = {
    currency: "usd"
};

const currencySlice = createSlice({
    name: "currency",
    initialState,
    reducers: {
        setCurrency: (state, action) => {
            state.currency = action.payload;
        }
    }
});

export const { setCurrency } = currencySlice.actions;
export const selectCurrency = (state: any) => state.currency;
export default currencySlice.reducer;