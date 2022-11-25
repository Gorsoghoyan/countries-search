import { selectCountries } from "../Redux/selections";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { getCountries } from "../Redux/actions";

const useCountry = () => {
    const countries = useSelector(selectCountries);
    const dispatch = useDispatch();
    const { id } = useParams();
    const [ country, setCountry ] = useState(null);

    useEffect(() => {
        countries?.find(country => {
            if (country.id === +id) {
                setCountry(country);
                return true;
            }
            return false;
        });
    }, [ id, countries ]);

    useEffect(() => {
        dispatch(getCountries());
    }, [ dispatch ]);

    return {
        country
    };
};

export default useCountry;