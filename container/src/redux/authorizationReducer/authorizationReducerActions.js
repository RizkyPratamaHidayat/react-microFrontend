import * as types from "./authorizationReducerTypes";

export const setUser = (payload) => {
    return {
        type: types.SET_USER,
        payload,
    };
};