import { CLOSE_ADD_POPUP, CLOSE_EDIT_POPUP, CLOSE_READ_POPUP, OPEN_ADD_POPUP, OPEN_EDIT_POPUP, OPEN_READ_POPUP } from "../../actionTypes";

const initialState = {
    openAdd: false,
    openEdit: false,
    countryData: null,
    openRead: false,
};

function popupReducer (state = initialState, action) {
    switch (action.type) {
        case OPEN_ADD_POPUP :
            return { ...state, openAdd: true };
        case OPEN_EDIT_POPUP :
            return { ...state, openEdit: true, countryData: action.payload };
        case CLOSE_ADD_POPUP :
            return { ...state, openAdd: false };
        case CLOSE_EDIT_POPUP :
            return { ...state, openEdit: false, countryData: action.payload };
        case OPEN_READ_POPUP :
            return { ...state, openRead: true, countryData: action.payload };
        case CLOSE_READ_POPUP :
            return { ...state, openRead: false, countryData: null };
        default :
            return state;
    };
}

export default popupReducer;