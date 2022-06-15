import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postsFetched } from "../../store/posts/slice";
import { selectPosts } from "../../store/posts/selectors";
import { fetchPosts } from "../../store/posts/thunks";

const API_URL = `https://hp-assessment-api.herokuapp.com`;

export default function HomePage() {
  const posts = useSelector(selectPosts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts);
  }, []);

  return !posts ? (
    <p>Loading</p>
  ) : (
    <div>
      <h2>Posts</h2>
      {posts.loading
        ? "Loading"
        : posts.map((post) => (
            <div key={post.id}>
              <h3>{post.name}</h3>
            </div>
          ))}
    </div>
  );
}

/*
 console.log("info", posts);

  const dispatch = useDispatch();
  async function fetchPosts() {
    try {
      const response = await axios.get(`${API_URL}/got/characters`);
      //console.log("res", response);

      dispatch(postsFetched(response.data.rows));
    } catch (e) {
      console.log(e.message);
    }
  }
*/
