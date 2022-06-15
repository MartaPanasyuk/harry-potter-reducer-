import { configureStore } from "@reduxjs/toolkit";
import characterReducer from "./characters/slice";
import houseReducer from "./houses/sice";
import userReducer from "./user/slice";

const store = configureStore({
  reducer: {
    character: characterReducer,
    house: houseReducer,
    user: userReducer,
  },
});

export default store;
