import { CLOSE_ADD_POPUP, CLOSE_EDIT_POPUP, CLOSE_READ_POPUP, DELETE_TOKEN, OPEN_ADD_POPUP, OPEN_EDIT_POPUP, OPEN_READ_POPUP, SET_COUNTRIES_DATA, SET_TOKEN } from "./actionTypes";

export const setCountries = (countries) => ({
    type: SET_COUNTRIES_DATA,
    payload: countries
});  

export const openEditPopup = (countryData) => ({
    type: OPEN_EDIT_POPUP,
    payload: countryData
});

export const openReadPopup = (country) => ({
    type: OPEN_READ_POPUP,
    payload: country
});

export const closeReadPopup = () => ({ type: CLOSE_READ_POPUP });

export const setToken = () => ({ type: SET_TOKEN });

export const deleteToken = () => ({ type: DELETE_TOKEN });  

export const openAddPopup = () => ({ type: OPEN_ADD_POPUP });

export const closeAddPopup = () => ({ type: CLOSE_ADD_POPUP });

export const closeEditPopup = () => ({ type: CLOSE_EDIT_POPUP });