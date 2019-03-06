import * as types from "../actions/types";

const initialState = {
  posts: [],
  isLoading: false,
  error: {}
};

export default function postReducer(state = initialState, action) {
  switch (action.type) {
    case types.fetchPosts:
      return {
        ...state,
        isLoading: true,
        error: {}
      };

    case types.fetchPostsSuccess:
      return {
        ...state,
        posts: action.posts,
        isLoading: false,
        error: {}
      };

    case types.fetchPostsFailure:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };
    default:
      return state;
  }
}