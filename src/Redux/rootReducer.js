import { combineReducers } from "redux";
import authReducer from "./Slices/AuthSlice";
import popupReducer from "./Slices/PopupSlice";
import accountsReducer from "./Slices/AccountsSlice";
import countriesReducer from "./Slices/CountriesSlice";

export const rootReducer = combineReducers({
    auth: authReducer,
    popup: popupReducer,
    accounts: accountsReducer,
    countries: countriesReducer,
});