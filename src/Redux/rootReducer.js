import { combineReducers } from "redux";
import { countriesReducer } from "./Slices/CountriesSlice";
import { menuToggleReducer } from "./Slices/MenuToggleSlice";

export const rootReducer = combineReducers({
    countries: countriesReducer,
    menu: menuToggleReducer
});