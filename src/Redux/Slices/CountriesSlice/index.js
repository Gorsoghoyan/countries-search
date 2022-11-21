import { countriesData } from "../../../fakeData/countries";
import { SET_COUNTRIES_DATA } from "../../actionTypes";

const initialState = {
    data: []
};

export const countriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_COUNTRIES_DATA :
            return { ...state, data: action.payload };
        default :
            return state;
    };
};

export const itemCheckboxToggle = (event, id) => {
    const json = localStorage.getItem('countriesData');
    const countriesDataFromLS = JSON.parse(json);

    countriesDataFromLS.find(country => {
        if (country.id === id) {
            country.checked = event.target.checked;
            return true;
        }
    });

    localStorage.setItem("countriesData", JSON.stringify(countriesDataFromLS));

    return {
        type: SET_COUNTRIES_DATA,
        payload: countriesDataFromLS
    };
};

export const getCountries = () => {
    const json = localStorage.getItem('countriesData');
    const countriesDataFromLS = JSON.parse(json);
    
    if (countriesDataFromLS) {
        return {type: SET_COUNTRIES_DATA, payload: countriesDataFromLS};
    } else {
        localStorage.setItem('countriesData', JSON.stringify(countriesData));
        return {type: SET_COUNTRIES_DATA, payload: countriesData};
    }
};