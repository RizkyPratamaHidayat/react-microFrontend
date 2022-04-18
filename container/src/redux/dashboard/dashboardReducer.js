import * as types from "./dashboardReducerTypes";

const initialState = {
  listCDCMember: {
    loading: false
  },
  loading: {
    loading: false
  },
  error: {
    loading: false
  }
};

const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_LIST_MEMBER_START:
      return {
        ...state,
        loading: {
          ...state.loading,
          ...action.payload,
        },
      };
    case types.GET_LIST_MEMBER_SUCCESS:
      return {
        ...state,
        listCDCMember: {
          ...state.listCDCMember,
          ...action.payload,
        },
      };
    case types.GET_LIST_MEMBER_FAILURE:
      return {
        ...state,
        error: {
          ...state.error,
          ...action.payload,
        },
      };
    default:
      return state;
  }
};

export default dashboardReducer;
