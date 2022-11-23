import { SET_COUNTRIES_DATA } from "../../actionTypes";

const initialState = {
    data: []
};

const countriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_COUNTRIES_DATA :
            return { ...state, data: action.payload };
        default :
            return state;
    };
};

export default countriesReducer;