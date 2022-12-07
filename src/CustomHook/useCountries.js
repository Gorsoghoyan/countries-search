import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCountries } from "../Redux/actions";
import { selectCountries, selectToken } from "../Redux/selections";
import useScrollHistory from "./useScrollHistory";

const useCountries = () => {
    const [ countries, setCountries ] = useState(null);
    const [ country, setCountry ] = useState(null);
    const countriesData = useSelector(selectCountries);
    const token = useSelector(selectToken);
    const nodeRef = useScrollHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCountries());
    }, [ dispatch ]);

    useEffect(() => {
        if (countriesData) {
            setCountries(countriesData.filter(country => country.checked));
        }
    }, [ countriesData ]);

    const showCountryPopup = (country) => {
        document.body.style.overflow = "hidden";
        setCountry(country);
    };

    const closeCountryPopup = () => {
        document.body.style.overflow = "auto";
        setCountry(null);
    };      

    return {
        countries,
        country,
        nodeRef,
        token,
        closeCountryPopup,
        showCountryPopup
    };
};

export default useCountries;