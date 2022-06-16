import axios from "axios";
import { postsFetched, postDetailsFetched } from "./slice";

const API_URL = `https://hp-assessment-api.herokuapp.com`;

export const fetchPosts = async (dispatch, getState) => {
  try {
    const response = await axios.get(`${API_URL}/got/characters`);
    //console.log("res", response);

    dispatch(postsFetched(response.data.rows));
  } catch (e) {
    console.log(e.message);
  }
};

export const fetchPostById = (postId) => async (dispatch, getState) => {
  try {
    const response = await axios.get(`${API_URL}/got/characters/${postId}`);
    console.log("one post", response.data);
    dispatch(postDetailsFetched(response.data));
  } catch (e) {
    console.log(e.message);
  }
};
