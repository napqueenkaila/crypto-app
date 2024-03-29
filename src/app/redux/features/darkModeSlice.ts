import { createSlice } from "@reduxjs/toolkit";

interface DarkModeState{
    darkMode: boolean;
}

const initialState: DarkModeState = {
    darkMode: true
};

const darkModeSlice = createSlice({
    name: "darkMode",
    initialState,
    reducers: {
        setDarkMode: (state, action) => {
            state.darkMode = action.payload;
        }
    }
});

export const { setDarkMode } = darkModeSlice.actions;

export const selectDarkMode = (state: any) => state.darkMode;
export default darkModeSlice.reducer;