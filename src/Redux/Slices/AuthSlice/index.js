import { DELETE_TOKEN, SET_TOKEN } from "../../actionTypes";

const token = localStorage.getItem('token') || false;

const initialState = {
    token
};

function authReducer (state = initialState, action) {
    switch (action.type) {
        case SET_TOKEN :
            return { ...state, token: true };
        case DELETE_TOKEN :
            return { ...state, token: false };
        default :
            return state;
    }
}

export default authReducer;

export const setToken = () => {
    localStorage.setItem("token", Date.now());

    return { type: SET_TOKEN };
};

export const deleteToken = () => {
    localStorage.removeItem("token");

    return { type: DELETE_TOKEN };
};