import * as types from "./generalReducerTypes";

const initialState = {
  containerData: {}
};

const generalReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_CONTAINER_DATA:
      return {
        ...state,
        containerData: {
          ...state.containerData,
          ...action.payload,
        },
      };
    default:
      return state;
  }
};

export default generalReducer;
