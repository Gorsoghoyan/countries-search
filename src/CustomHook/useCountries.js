import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCountries } from "../Redux/actions";
import { selectCountries, selectToken } from "../Redux/selections";
import { openCountryPopup } from "../Redux/setter";
import useScrollHistory from "./useScrollHistory";

const useCountries = () => {
    const [ countries, setCountries ] = useState(null);
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

    const openPopup = (country) => {
        dispatch(openCountryPopup(country));
    };

    return {
        countries,
        nodeRef,
        token,
        openPopup
    };
};

export default useCountries;