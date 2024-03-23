import { createSlice } from "@reduxjs/toolkit";

interface HasMoreState {
  hasMore: boolean;
}

const initialState: HasMoreState = { hasMore: true };

const hasMoreSlice = createSlice({
  name: "hasMore",
  initialState,
  reducers: {
    toggleHasMore: state => {
      return state = {hasMore: !state};
    },
  },
});

export const { toggleHasMore } = hasMoreSlice.actions;

export default hasMoreSlice.reducer;
