import { useDispatch } from "react-redux";
import { SET_MENU_TOGGLE } from "./actionTypes";
import { setter } from "./Slices/setter";


export const setMenuToggle = (toggle) => {
    return setter(SET_MENU_TOGGLE, toggle);
};