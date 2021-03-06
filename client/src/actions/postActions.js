import axios from "axios";
import * as actionTypes from "./actionTypes";

// Add post
export const addPost = postData => {
  return dispatch => {
    dispatch(clearErrors());
    axios
      .post("/api/posts", postData)
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

// Get posts
export const getPosts = () => {
  return dispatch => {
    dispatch(setPostLoading());
    axios
      .get("/api/posts")
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

// Get post
export const getPost = id => {
  return dispatch => {
    dispatch(setPostLoading());
    axios
      .get(`/api/posts/${id}`)
      .then(res => {
        dispatch({
          type: actionTypes.GET_POST,
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
      .delete(`/api/posts/${id}`)
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
      .post(`/api/posts/like/${id}`)
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
      .post(`/api/posts/unlike/${id}`)
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

// Add comment
export const addComment = (postId, commentData) => {
  return dispatch => {
    dispatch(clearErrors());
    axios
      .post(`/api/posts/comment/${postId}`, commentData)
      .then(res => {
        dispatch({
          type: actionTypes.GET_POST,
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

// Delete comment
export const deleteComment = (postId, commentId) => {
  return dispatch => {
    axios
      .delete(`/api/posts/comment/${postId}/${commentId}`)
      .then(res => {
        dispatch({
          type: actionTypes.GET_POST,
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

// Set loading state
export const setPostLoading = () => {
  return { type: actionTypes.POST_LOADING };
};

// Clear errors
export const clearErrors = () => {
  return { type: actionTypes.CLEAR_ERRORS };
};
