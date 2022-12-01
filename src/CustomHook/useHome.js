import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCountries } from "../Redux/actions";
import { selectCountries } from "../Redux/selections";

const useHome = () => {
    const dispatch = useDispatch();
    const countriesData = useSelector(selectCountries);
    const [ countries, setCountries ] = useState(null);
    const [ country, setCountry ] = useState(null);

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
        closeCountryPopup,
        showCountryPopup
    };
};

export default useHome;