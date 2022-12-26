import { SET_SUB_USERS } from "../../actionTypes";

const subUsers = JSON.parse(localStorage.getItem("sub-users")) || []; 

const initialState = {
    data: subUsers,
};

function subUsersReducer (state = initialState, action) {
    switch (action.type) {
        case SET_SUB_USERS :
            return { ...state, data: action.payload };
        default :
            return state;
    }
}

export default subUsersReducer;