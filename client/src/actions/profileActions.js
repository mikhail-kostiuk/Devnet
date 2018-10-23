import axios from "axios";

import * as actionTypes from "./actionTypes";

// Get current profile
export const getCurrentProfile = () => {
  return dispatch => {
    dispatch(setProfileLoading());
    axios
      .get("/api/profile")
      .then(res =>
        dispatch({
          type: actionTypes.GET_PROFILE,
          payload: res.data
        })
      )
      .catch(err =>
        dispatch({
          type: actionTypes.GET_PROFILE,
          payload: {}
        })
      );
  };
};

// Create Profile
export const createProfile = (profileData, history) => {
  return dispatch => {
    axios
      .post("/api/profile", profileData)
      .then(res => history.push("/dashboard"))
      .catch(err =>
        dispatch({
          type: actionTypes.GET_ERROR,
          payload: err.response.data
        })
      );
  };
};

// Delete account & profile
export const deleteAccount = () => {
  return dispatch => {
    if (window.confirm("Are you sure? This can NOT be undone!")) {
      axios
        .delete("api/profile")
        .then(res =>
          dispatch({
            type: actionTypes.SET_CURRENT_USER,
            payload: {}
          })
        )
        .catch(err =>
          dispatch({ type: actionTypes.GET_ERROR, payload: err.response.data })
        );
    }
  };
};

// Profile loading
export const setProfileLoading = () => {
  return {
    type: actionTypes.PROFILE_LOADING
  };
};

// Clear current profile
export const clearCurrentProfile = () => {
  return {
    type: actionTypes.CLEAR_CURRENT_PROFILE
  };
};
