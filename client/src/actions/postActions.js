import axios from "axios";
import * as actionTypes from "./actionTypes";

export const addPost = postData => {
  return dispatch => {
    axios
      .post("api/posts", postData)
      .then(res => {
        dispatch({
          type: actionTypes.ADD_POST,
          payload: res.data
        });
      })
      .catch(err =>
        dispatch({
          type: actionTypes.GET_ERROR,
          payload: err.response.data
        })
      );
  };
};

export const getPosts = () => {
  return dispatch => {
    dispatch(setPostLoading());
    axios
      .get("api/posts")
      .then(res => {
        dispatch({
          type: actionTypes.GET_POSTS,
          payload: res.data
        });
      })
      .catch(err =>
        dispatch({
          type: actionTypes.GET_POSTS,
          payload: null
        })
      );
  };
};

// Set loading state
export const setPostLoading = () => {
  return { type: actionTypes.POST_LOADING };
};
