import axios from "axios";
import { postsFetched } from "./slice";

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
