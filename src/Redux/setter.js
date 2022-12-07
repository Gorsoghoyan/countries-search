import { CLOSE_ADD_POPUP, CLOSE_EDIT_POPUP, DELETE_TOKEN, OPEN_ADD_POPUP, OPEN_EDIT_POPUP, SET_COUNTRIES_DATA, SET_TOKEN, USER_SIGN_IN, USER_SIGN_OUT } from "./actionTypes";

export const setCountries = (countries) => ({
    type: SET_COUNTRIES_DATA,
    payload: countries
});  

export const openEditPopup = (countryData) => ({
    type: OPEN_EDIT_POPUP,
    payload: countryData
});

export const openAddPopup = () => ({ type: OPEN_ADD_POPUP });

export const closeAddPopup = () => ({ type: CLOSE_ADD_POPUP });

export const closeEditPopup = () => ({ type: CLOSE_EDIT_POPUP });

export const setUserData = (userName) => ({
    type: USER_SIGN_IN,
    payload: userName
});

export const deleteUserData = () => ({ type: USER_SIGN_OUT })