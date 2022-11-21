import { combineReducers } from "redux";
import { countriesReducer } from "./Slices/CountriesSlice";

export const rootReducer = combineReducers({
    countries: countriesReducer
});