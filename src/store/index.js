import { configureStore } from "@reduxjs/toolkit";
import characterReducer from "./characters/slice";
import houseReducar from "./houses/sice";

const store = configureStore({
  reducer: {
    character: characterReducer,
    house: houseReducar,
  },
});

export default store;
