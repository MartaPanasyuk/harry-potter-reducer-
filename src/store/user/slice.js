import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Trixy",
  id: 45,
  favorites: [1, 3],
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    toggleFav: (state, action) => {
      // state = favorites[]
      //action.payload=> need an id of char to add to my favorites

      const charId = action.payload;
      // check if it's already there
      if (state.favorites.includes(charId)) {
        // if it is => remove it
        state.favorites = state.favorites.filter((cId) => cId !== charId);
      } else {
        // if it's not => add it
        state.favorites = [...state.favorites, charId];
      }
    },
  },
});

export const { toggleFav } = userSlice.actions;
export default userSlice.reducer;
