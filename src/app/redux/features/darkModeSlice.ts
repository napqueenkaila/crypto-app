import { createSlice } from "@reduxjs/toolkit";
import { DarkModeState } from "@/app/types/interfaces/sliceState.interfaces";

const initialState: DarkModeState = {
  darkMode: true,
};

const darkModeSlice = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    toggle: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

export const { toggle } = darkModeSlice.actions;

export const selectDarkMode = (state: any) => state.darkMode;
export default darkModeSlice.reducer;
