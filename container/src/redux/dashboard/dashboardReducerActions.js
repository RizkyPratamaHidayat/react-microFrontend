import * as types from "./dashboardReducerTypes";

export const getListMemberStart = (payload) => {
  return {
    type: types.GET_LIST_MEMBER_START,
    payload
  }
}

export const getListMemberSuccess = (payload) => {
  return {
    type: types.GET_LIST_MEMBER_SUCCESS,
    payload
  }
}

export const getListMemberFailure =  (payload) => {
  return {
    type: types.GET_LIST_MEMBER_FAILURE,
    payload
  }
}