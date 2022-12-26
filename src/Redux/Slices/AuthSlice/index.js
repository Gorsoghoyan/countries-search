import { USER_SIGN_OUT, USER_SIGN_IN } from "../../actionTypes";

const token = JSON.parse(localStorage.getItem('user'))?.token || false;
const userData = JSON.parse(localStorage.getItem('user'));

const initialState = {
    token,
    userData,
};

function authReducer (state = initialState, action) {
    switch (action.type) {
        case USER_SIGN_IN :
            return { ...state, token: true, userData: action.payload };
        case USER_SIGN_OUT :
            return { ...state, token: false, userData: null };
        default :
            return state;
    }
}

export default authReducer;