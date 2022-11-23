import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCountries, selectMenuToggle } from "../Redux/selections";
import { getCountries, itemCheckboxToggle } from "../Redux/Slices/CountriesSlice";

const useList = () => {
    const countriesData = useSelector(selectCountries);
    const menuToggle = useSelector(selectMenuToggle);
    const [ menuStyle, setMenuStyle ] = useState({});
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCountries());
    }, [ dispatch ]);

    useEffect(() => {
        if (menuToggle) {
            setMenuStyle({ left: 0 });
        } else {
            setMenuStyle({ left: -250 });
        }
    }, [ menuToggle ]);

    const handleChangeCheckbox = (event, id) => {
        dispatch(itemCheckboxToggle(event, id));
    };

    return {
        countriesData,
        handleChangeCheckbox,
        menuStyle
    };
};

export default useList;