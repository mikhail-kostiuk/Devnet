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
          type: actionTypes.GET_ERROR,
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

// Add experience
export const addExperience = (experienceData, history) => {
  return dispatch => {
    axios
      .post("/api/profile/experience", experienceData)
      .then(res => history.push("/dashboard"))
      .catch(err =>
        dispatch({
          type: actionTypes.GET_ERROR,
          payload: err.response.data
        })
      );
  };
};

// Delete experience
export const deleteExperience = (expId, history) => {
  return dispatch => {
    axios
      .delete(`/api/profile/experience/${expId}`)
      .then(res =>
        dispatch({
          type: actionTypes.GET_PROFILE,
          payload: res.data
        })
      )
      .catch(err =>
        dispatch({
          type: actionTypes.GET_ERROR,
          payload: err.response.data
        })
      );
  };
};

// Add education
export const addEducation = (educationData, history) => {
  return dispatch => {
    console.log("addEdu action");
    axios
      .post("/api/profile/education", educationData)
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
