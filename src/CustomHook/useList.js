import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCountries, selectMenuToggle } from "../Redux/selections";
import { itemCheckboxToggle } from "../Redux/Slices/CountriesSlice";

const useList = () => {
    const countriesData = useSelector(selectCountries);
    const menuToggle = useSelector(selectMenuToggle);
    const dispatch = useDispatch();
    const [ menuStyle, setMenuStyle ] = useState({});

    const handleChangeCheckbox = (event, id) => {
        dispatch(itemCheckboxToggle(event, id));
    };

    useEffect(() => {
        if (menuToggle) {
            setMenuStyle({ left: 0 });
        } else {
            setMenuStyle({ left: -250 });
        }
    }, [ menuToggle ]);

    return {
        countriesData,
        handleChangeCheckbox,
        menuStyle
    };
};

export default useList;