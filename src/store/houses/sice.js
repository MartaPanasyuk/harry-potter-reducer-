import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allHouses: [
    {
      id: 1,
      name: "Gryffindor",
      characters: [1, 2],
    },
    {
      id: 2,
      name: "Hufflepuff",
      characters: [1, 3],
    },
    {
      id: 3,
      name: "Ravenclaw",
      characters: [1],
    },
    {
      id: 4,
      name: "Slytherin",
      characters: [2, 4],
    },
  ],
};

export const houseSlice = createSlice({
  name: "houses",
  initialState,
  reducers: {},
});

export const {} = houseSlice.actions;

export default houseSlice.reducer;
