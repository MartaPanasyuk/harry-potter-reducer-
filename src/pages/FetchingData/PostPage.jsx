import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { fetchPostById } from "../../store/posts/thunks";
import { selectPostDetails } from "../../store/posts/selectors";

export default function PostPage() {
  const params = useParams();
  const dispatch = useDispatch();
  const postDetails = useSelector(selectPostDetails);
  //console.log("do I have an info?", postDetails);

  useEffect(() => {
    dispatch(fetchPostById(params.id));
  }, []);

  return !postDetails ? (
    <p>Loading</p>
  ) : (
    <div>
      <h2>Our Details</h2> <p>{postDetails.name}</p>
    </div>
  );
}

/* 
return !details.details ? (
    <p>Loading</p>
  ) : (
    <div>
      <h2>Our Page</h2>
      <p>{details.details.title}</p>
      <p>{}</p>
    </div>
  );
*/
