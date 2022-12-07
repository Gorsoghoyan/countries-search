import { countriesData } from "../fakeData/countries";
import { deleteUserData, setCountries, setUserData } from "./setter";

export const getCountries = () => {
    const json = localStorage.getItem('countriesData');
    const countriesDataFromLS = JSON.parse(json);

    return (dispatch) => {
        if (countriesDataFromLS) {
            dispatch(setCountries(countriesDataFromLS));
        } else {
            localStorage.setItem('countriesData', JSON.stringify(countriesData));
            dispatch(setCountries(countriesData));
        }
    };
};

export const changeCountryCheckbox = (event, id) => {
    const json = localStorage.getItem('countriesData');
    const countriesDataFromLS = JSON.parse(json);

    countriesDataFromLS.find(country => {
        if (country.id === id) {
            country.checked = event.target.checked;
            return true;
        }
        return false;
    });

    localStorage.setItem("countriesData", JSON.stringify(countriesDataFromLS));

    return (dispatch) => dispatch(setCountries(countriesDataFromLS));
};

export const deleteCountry = (id) => {
    const json = localStorage.getItem('countriesData');
    const countriesDataFromLS = JSON.parse(json);

    const newCountries = countriesDataFromLS.filter(country => country.id !== id);

    localStorage.setItem("countriesData", JSON.stringify(newCountries));

    return (dispatch) => dispatch(setCountries(newCountries));
};

export const userSignIn = (userName) => {
    localStorage.setItem("user", JSON.stringify({
        token: Date.now(),
        userName,
    })); 

    return (dispatch) => dispatch(setUserData(userName));
};

export const userSignOut = () => {
    localStorage.removeItem("user");

    return (dispatch) => dispatch(deleteUserData());
};

export const editCountryData = (id, editedCountry) => {
    const json = localStorage.getItem('countriesData');
    const countriesDataFromLS = JSON.parse(json);

    countriesDataFromLS.find(country => {
        if (country.id === id) {
            country.name = editedCountry.name;
            country.capital = editedCountry.capital;
            country.description = editedCountry.description;
            return true;
        }
        return false;
    });

    localStorage.setItem("countriesData", JSON.stringify(countriesDataFromLS));

    return (dispatch) => dispatch(setCountries(countriesDataFromLS));
};

export const addNewCountry = (newCountry) => {
    const json = localStorage.getItem('countriesData');
    const countriesDataFromLS = JSON.parse(json);

    const country = {
        ...newCountry,
        checked: false,
        id: Date.now() + Math.random()
    };

    countriesDataFromLS.unshift(country);

    localStorage.setItem("countriesData", JSON.stringify(countriesDataFromLS));

    return (dispatch) => dispatch(setCountries(countriesDataFromLS));
};