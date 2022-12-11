import { CLOSE_ADD_POPUP, CLOSE_COUNTRY_POPUP, CLOSE_EDIT_POPUP, OPEN_ADD_POPUP, OPEN_COUNTRY_POPUP, OPEN_EDIT_POPUP } from "../../actionTypes";

const initialState = {
    activePopup: { open: false },
    addPopup: { open: false },
    editPopup: { open: false, data: null },
    countryPopup: { open: false, data: null },
};

function popupReducer (state = initialState, action) {
    switch (action.type) {
        case OPEN_ADD_POPUP :
            return { ...state, addPopup: { open: true }, activePopup: { open: true } };
        case CLOSE_ADD_POPUP :
            return { ...state, addPopup: { open: false }, activePopup: { open: false } };
        case OPEN_EDIT_POPUP :
            return { ...state, editPopup: { open: true, data: action.payload }, activePopup: { open: true } };
        case CLOSE_EDIT_POPUP :
            return { ...state, editPopup: { open: false, data: null }, activePopup: { open: false } };
        case OPEN_COUNTRY_POPUP :
            return { ...state, countryPopup: { open: true, data: action.payload }, activePopup: { open: true } };
        case CLOSE_COUNTRY_POPUP :
            return { ...state, countryPopup: { open: false, data: null }, activePopup: { open: false } };
        default :
            return state;
    };
}

export default popupReducer;