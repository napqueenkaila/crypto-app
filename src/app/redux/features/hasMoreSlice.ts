import { createSlice } from "@reduxjs/toolkit";
import { HasMoreState } from "@/app/types/interfaces/sliceState.interfaces";

const initialState: HasMoreState = { hasMore: true };

const hasMoreSlice = createSlice({
  name: "hasMore",
  initialState,
  reducers: {
    toggleHasMore: (state) => {
      return (state = { hasMore: !state });
    },
  },
});

export const { toggleHasMore } = hasMoreSlice.actions;

export default hasMoreSlice.reducer;
