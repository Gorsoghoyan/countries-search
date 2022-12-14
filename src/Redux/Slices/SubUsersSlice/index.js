import { SET_SUB_USER, SET_SUB_USERS } from "../../actionTypes";

const subUsers = JSON.parse(localStorage.getItem("sub-users")) || []; 
const subUser = JSON.parse(localStorage.getItem("sub-user")) || {}; 

const initialState = {
    data: subUsers,
    subUser,
};

function subUsersReducer (state = initialState, action) {
    switch (action.type) {
        case SET_SUB_USERS :
            return { ...state, data: action.payload };
        case SET_SUB_USER :
            return { ...state, subUser: action.payload };
        default :
            return state;
    }
}

export default subUsersReducer;