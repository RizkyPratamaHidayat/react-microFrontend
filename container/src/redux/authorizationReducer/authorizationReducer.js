import * as types from "./authorizationReducerTypes";

const initialState = {
  user: {}
};

const authorizationReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_USER:
      return {
        ...state,
        user: {
          ...state.user,
          ...action.payload,
        },
      };
    default:
      return state;
  }
};

export default authorizationReducer;
