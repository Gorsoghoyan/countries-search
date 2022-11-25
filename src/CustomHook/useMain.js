import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCountries } from "../Redux/actions";
import { selectCountries } from "../Redux/selections";

const useMain = () => {
    const dispatch = useDispatch();
    const countriesData = useSelector(selectCountries);
    const [ countries, setCountries ] = useState(null);

    useEffect(() => {
        dispatch(getCountries());
    }, [ dispatch ]);

    useEffect(() => {
        if (countriesData) {
            setCountries(countriesData.filter(country => country.checked));
        }
    }, [ countriesData ]);

    return {
        countries
    };
};

export default useMain;