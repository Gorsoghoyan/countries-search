import { SET_COUNTRIES_DATA } from "../actionTypes";

export const setCountries = (countries) => {
    return {
        type: SET_COUNTRIES_DATA,
        payload: countries
    };
};  