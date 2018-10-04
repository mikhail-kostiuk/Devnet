import axios from "axios";
import jwt_decode from "jwt-decode";
import setAuthToken from "../utils/setAuthToken";
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

export const loginUser = userData => {
  return dispatch => {
    axios
      .post("/api/users/login", userData)
      .then(res => {
        // Save token to localStorage
        const { token } = res.data;
        localStorage.setItem("jwtToken", token);

        // Set token to Auth header
        setAuthToken(token);

        // Decode token to get user data
        const decodedUserData = jwt_decode(token);

        // Set current user
        dispatch({
          type: actionTypes.SET_CURRENT_USER,
          payload: decodedUserData
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

export const logoutUser = () => {
  return dispatch => {
    // Remove token from local storage
    localStorage.removeItem("jwtToken");

    // Remove auth header for future requests
    setAuthToken(false);

    // Set current user to empty object
    dispatch({
      type: actionTypes.SET_CURRENT_USER,
      payload: {}
    });
  };
};
