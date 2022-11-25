import { CLOSE_ADD_POPUP, CLOSE_EDIT_POPUP, OPEN_ADD_POPUP, OPEN_EDIT_POPUP } from "../../actionTypes";

const initialState = {
    editPopup: {
        countryData: null,
    },
    addPopup: {
        open: false,
    }
};

function popupReducer (state = initialState, action) {
    switch (action.type) {
        case OPEN_EDIT_POPUP :
            return { 
                ...state,  
                editPopup: {
                    countryData: action.payload
                }
            };
        case CLOSE_EDIT_POPUP :
            return {
                ...state,
                editPopup: {
                    countryData: null
                }
            };
        case OPEN_ADD_POPUP :
            return {
                ...state,
                addPopup: {
                    open: true
                }
            };
        case CLOSE_ADD_POPUP :
            return {
                ...state,
                addPopup: {
                    open: false
                }
            };
        default :
            return state;
    };
}

export default popupReducer;