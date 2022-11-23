import { combineReducers } from "redux";
import authReducer from "./Slices/AuthSlice";
import countriesReducer from "./Slices/CountriesSlice";
import menuToggleReducer from "./Slices/MenuToggleSlice";

export const rootReducer = combineReducers({
    countries: countriesReducer,
    auth: authReducer,
    menu: menuToggleReducer,
});