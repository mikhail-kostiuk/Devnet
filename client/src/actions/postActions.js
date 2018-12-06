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
