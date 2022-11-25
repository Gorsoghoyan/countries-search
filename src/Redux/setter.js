import { CLOSE_ADD_POPUP, CLOSE_EDIT_POPUP, DELETE_TOKEN, OPEN_ADD_POPUP, OPEN_EDIT_POPUP, SET_COUNTRIES_DATA, SET_TOKEN } from "./actionTypes";

export const setCountries = (countries) => {
    return {
        type: SET_COUNTRIES_DATA,
        payload: countries
    };
};  

export const setToken = () => {
    return {
        type: SET_TOKEN
    };
};

export const deleteToken = () => {
    return {
        type: DELETE_TOKEN
    };  
};  

export const openEditPopup = (countryData) => {
    return {
        type: OPEN_EDIT_POPUP,
        payload: countryData
    };  
};

export const closeEditPopup = () => {
    return {
        type: CLOSE_EDIT_POPUP
    };  
};

export const openAddpopup = () => {
    return {
        type: OPEN_ADD_POPUP
    };
};

export const closeAddPopup = () => {
    return {
        type: CLOSE_ADD_POPUP
    };
};


