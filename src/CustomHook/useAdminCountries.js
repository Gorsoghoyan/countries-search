import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../Redux/actions";
import { selectCountries } from "../Redux/selections";
import { openAddCountryPopup } from "../Redux/setter";
import useScrollHistory from "./useScrollHistory";

const useAdminCountries = () => {
    const [ countries, setCountries ] = useState(null);
    const countriesData = useSelector(selectCountries);
    // const nodeRef = useScrollHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCountries());
    }, [ dispatch ]);

    useEffect(() => {
        setCountries(countriesData);
    }, [ countriesData ]);

    const handleAddPopup = () => {
        dispatch(openAddCountryPopup());  
    };

    return {
        countries,
        // nodeRef,
        handleAddPopup
    };  
};

export default useAdminCountries;