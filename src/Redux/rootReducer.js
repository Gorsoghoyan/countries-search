import { combineReducers } from "redux";
import authReducer from "./Slices/AuthSlice";
import countriesReducer from "./Slices/CountriesSlice";
import popupReducer from "./Slices/PopupSlice";

export const rootReducer = combineReducers({
    countries: countriesReducer,
    popup: popupReducer,
    auth: authReducer
});