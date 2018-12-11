import * as actionTypes from "../actions/actionTypes";

const initialState = {
  posts: [],
  post: {},
  loading: false
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_POST:
      return { ...state, posts: [action.payload, ...state.posts] };
    default:
      return state;
  }
};

export default postReducer;
