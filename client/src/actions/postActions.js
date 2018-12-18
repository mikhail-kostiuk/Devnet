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

// Delete post
export const deletePost = id => {
  return dispatch => {
    axios
      .delete(`api/posts/${id}`)
      .then(res => {
        dispatch({
          type: actionTypes.DELETE_POST,
          payload: id
        });
      })
      .catch(err => {
        dispatch({
          type: actionTypes.GET_ERROR,
          payload: err.response.data
        });
      });
  };
};

// Add like
export const addLike = id => {
  return dispatch => {
    axios
      .post(`api/posts/like/${id}`)
      .then(res => {
        dispatch(getPosts());
      })
      .catch(err => {
        dispatch({
          type: actionTypes.GET_ERROR,
          payload: err.response.data
        });
      });
  };
};

// Remove like
export const removeLike = id => {
  return dispatch => {
    axios
      .post(`api/posts/unlike/${id}`)
      .then(res => {
        dispatch(getPosts());
      })
      .catch(err => {
        dispatch({
          type: actionTypes.GET_ERROR,
          payload: err.response.data
        });
      });
  };
};

// Set loading state
export const setPostLoading = () => {
  return { type: actionTypes.POST_LOADING };
};
