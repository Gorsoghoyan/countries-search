import { countriesData } from "../fakeData/countries";
import { setCountries } from "./Slices/setter";

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