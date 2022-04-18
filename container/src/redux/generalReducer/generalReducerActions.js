import * as types from "./generalReducerTypes";

export const setContainerdata = (payload) => {
    return {
        type: types.SET_CONTAINER_DATA,
        payload,
    };
};