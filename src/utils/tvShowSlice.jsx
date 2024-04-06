import { createSlice } from "@reduxjs/toolkit";

const tvShowSlice = createSlice({
  name: "TVshows",
  initialState: {
    trendingShows: null,
  },
  reducers: {
    addTrendingShows: (state, action) => {
      state.trendingShows = action.payload;
    },
  },
});

export const { addTrendingShows } = tvShowSlice.actions;
export default tvShowSlice.reducer;
