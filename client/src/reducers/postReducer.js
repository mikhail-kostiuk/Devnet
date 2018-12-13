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
    case actionTypes.GET_POSTS:
      return { ...state, posts: action.payload, loading: false };
    case actionTypes.POST_LOADING:
      return { ...state, loading: true };
    default:
      return state;
  }
};

export default postReducer;
