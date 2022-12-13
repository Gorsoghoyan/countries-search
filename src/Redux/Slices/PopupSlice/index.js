import { CLOSE_ADD_COUNTRY_POPUP, CLOSE_ADD_SUB_USER_POPUP, CLOSE_COUNTRY_POPUP, CLOSE_EDIT_COUNTRY_POPUP, OPEN_ADD_COUNTRY_POPUP, OPEN_ADD_SUB_USER_POPUP, OPEN_COUNTRY_POPUP, OPEN_EDIT_COUNTRY_POPUP } from "../../actionTypes";

const initialState = {
    activePopup: { open: false },
    addCountry: { open: false },
    editCountry: { open: false, data: null },
    country: { open: false, data: null },
    addSubUser: { open: false },
    editSubUser: { open: false, data: null },
};

function popupReducer (state = initialState, action) {
    switch (action.type) {
        case OPEN_ADD_COUNTRY_POPUP :
            return { ...state, addCountry: { open: true }, activePopup: { open: true } };
        case CLOSE_ADD_COUNTRY_POPUP :
            return { ...state, addCountry: { open: false }, activePopup: { open: false } };
        case OPEN_EDIT_COUNTRY_POPUP :
            return { ...state, editCountry: { open: true, data: action.payload }, activePopup: { open: true } };
        case CLOSE_EDIT_COUNTRY_POPUP :
            return { ...state, editCountry: { open: false, data: null }, activePopup: { open: false } };
        case OPEN_COUNTRY_POPUP :
            return { ...state, country: { open: true, data: action.payload }, activePopup: { open: true } };
        case CLOSE_COUNTRY_POPUP :
            return { ...state, country: { open: false, data: null }, activePopup: { open: false } };
        case OPEN_ADD_SUB_USER_POPUP :
            return { ...state, addSubUser: { open: true }, activePopup: { open: true } };
        case CLOSE_ADD_SUB_USER_POPUP :
            return { ...state, addSubUser: { open: false }, activePopup: { open: false }};
        default :
            return state;
    };
}

export default popupReducer;