import { configureStore } from "@reduxjs/toolkit";
import characterReducer from "./characters/slice";
import houseReducer from "./houses/sice";
import userReducer from "./user/slice";
import postReducer from "./posts/slice";

const store = configureStore({
  reducer: {
    character: characterReducer,
    house: houseReducer,
    user: userReducer,
    posts: postReducer,
  },
});

export default store;
