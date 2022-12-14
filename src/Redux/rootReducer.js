import { combineReducers } from "redux";
import authReducer from "./Slices/AuthSlice";
import popupReducer from "./Slices/PopupSlice";
import subUsersReducer from "./Slices/SubUsersSlice";
import countriesReducer from "./Slices/CountriesSlice";

export const rootReducer = combineReducers({
    auth: authReducer,
    popup: popupReducer,
    subUsers: subUsersReducer,
    countries: countriesReducer,
});