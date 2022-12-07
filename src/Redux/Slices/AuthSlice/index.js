import { USER_SIGN_OUT, USER_SIGN_IN } from "../../actionTypes";

const token = localStorage.getItem('user')  ? true : false;
const userName = JSON.parse(localStorage.getItem('user'))?.userName || "";

const initialState = {
    token,
    userName,
};

function authReducer (state = initialState, action) {
    switch (action.type) {
        case USER_SIGN_IN :
            return { ...state, token: true, userName: action.payload };
        case USER_SIGN_OUT :
            return { ...state, token: false, userName: "" };
        default :
            return state;
    }
}

export default authReducer;