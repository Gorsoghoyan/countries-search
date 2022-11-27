
const initialState = {
    openAdd: false,
    openEdit: false,
    countryData: null
};

function popupReducer (state = initialState, action) {
    switch (action.type) {
        case "OPEN_ADD_POPUP" :
            return { ...state, openAdd: true };
        case "OPEN_EDIT_POPUP" :
            return { ...state, openEdit: true, countryData: action.payload };
        case "CLOSE_ADD_POPUP" :
            return { ...state, openAdd: false };
        case "CLOSE_EDIT_POPUP" :
            return { ...state, openEdit: false, countryData: action.payload };
        default :
            return state;
    };
}

export default popupReducer;