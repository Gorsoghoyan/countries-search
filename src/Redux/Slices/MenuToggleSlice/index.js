import { SET_MENU_TOGGLE } from "../../actionTypes";

const initialState = {
    toggle: true
};

const menuToggleReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MENU_TOGGLE:
            return { ...state, toggle: action.payload };
        default :
            return state;
    };
};

export default menuToggleReducer;