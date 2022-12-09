import { combineReducers } from "redux";
import authReducer from "./Slices/AuthSlice";
import popupReducer from "./Slices/PopupSlice";
import subUserReducer from "./Slices/SubUserSlice";
import countriesReducer from "./Slices/CountriesSlice";

export const rootReducer = combineReducers({
    auth: authReducer,
    popup: popupReducer,
    subUser: subUserReducer,
    countries: countriesReducer,
});