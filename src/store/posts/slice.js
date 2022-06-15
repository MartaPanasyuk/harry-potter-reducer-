import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  all: [],
  loading: true,
};

export const postSlice = createSlice({
  initialState,
  name: "posts",
  reducers: {
    postsFetched: (state, action) => {
      //action.payload =>[{}{}{}]
      state.all = [...action.payload];
      state.loading = false;
    },
  },
});
export const { postsFetched } = postSlice.actions;
export default postSlice.reducer;
