import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  all: [],
  postDetails: null, // {} - here should be my page details
};

export const postSlice = createSlice({
  initialState,
  name: "posts",
  reducers: {
    startLoading: (state) => {
      state.loading = true;
    },
    postsFetched: (state, action) => {
      //action.payload =>[{}{}{}]
      state.all = [...action.payload];
    },
    stopLoading: (state) => {
      state.loading = false;
    },
    postDetailsFetched: (state, action) => {
      //action.payload = my post
      state.postDetails = action.payload;
    },
  },
});
export const { postsFetched, postDetailsFetched } = postSlice.actions;
export default postSlice.reducer;
