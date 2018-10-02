import axios from "axios";
import * as actionTypes from "./actionTypes";

export const registerUser = (userData, history) => {
  return dispatch => {
    axios
      .post("/api/users/register", userData)
      .then(res => history.push("/login"))
      .catch(err =>
        dispatch({
          type: actionTypes.GET_ERROR,
          payload: err.response.data
        })
      );
  };
};
