import { OPEN_COUNTRY_POPUP, CLOSE_COUNTRY_POPUP, SET_COUNTRIES_DATA, USER_SIGN_IN, USER_SIGN_OUT, OPEN_ADD_COUNTRY_POPUP, CLOSE_ADD_COUNTRY_POPUP, CLOSE_EDIT_COUNTRY_POPUP, OPEN_EDIT_COUNTRY_POPUP, OPEN_ADD_SUB_USER_POPUP, CLOSE_ADD_SUB_USER_POPUP, SET_SUB_USERS, SET_SUB_USER, SET_TOKEN, DELETE_TOKEN } from "./actionTypes";

export const setCountries = (countries) => ({
    type: SET_COUNTRIES_DATA,
    payload: countries
});  

export const setSubUsers = (subUsers) => ({
    type: SET_SUB_USERS,
    payload: subUsers
});

export const openEditCountryPopup = (countryData) => ({
    type: OPEN_EDIT_COUNTRY_POPUP,
    payload: countryData
});

export const closeEditCountryPopup = () => ({ type: CLOSE_EDIT_COUNTRY_POPUP });

export const openAddCountryPopup = () => ({ type: OPEN_ADD_COUNTRY_POPUP });

export const closeAddCountryPopup = () => ({ type: CLOSE_ADD_COUNTRY_POPUP });

export const openCountryPopup = (countryData) => ({
    type: OPEN_COUNTRY_POPUP,
    payload: countryData
});

export const closeCountryPopup = () => ({ type: CLOSE_COUNTRY_POPUP });

export const openAddSubUserPopup = () => ({ type: OPEN_ADD_SUB_USER_POPUP });

export const closeAddSubUserPopup = () => ({ type: CLOSE_ADD_SUB_USER_POPUP });

export const setUserData = (userData) => ({
    type: USER_SIGN_IN,
    payload: userData
});

export const deleteUserData = () => ({ type: USER_SIGN_OUT })