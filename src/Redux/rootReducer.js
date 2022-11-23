import { combineReducers } from "redux";
import authReducer from "./Slices/AuthSlice";
import countriesReducer from "./Slices/CountriesSlice";

export const rootReducer = combineReducers({
    countries: countriesReducer,
    auth: authReducer,
});