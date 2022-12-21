import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../Redux/actions";
import { selectCountries } from "../Redux/selections";
import { useSearch } from "./useSearch";
import useInfiniteScrolling from "./useInfiniteScrolling";
import useScrollHistory from "./useScrollHistory";

const useCountriesFull = (type) => {
    const [ countries, setCountries ] = useState(null);
    const { isPending, filteredData, search, handleSearch } = useSearch(countries);
    const { scrollingData } = useInfiniteScrolling(40, filteredData);
    const [ styles, setStyles ] = useState(null);
    const countriesData = useSelector(selectCountries);
    const dispatch = useDispatch();
    useScrollHistory();

    useEffect(() => {
        dispatch(getCountries());
    }, [ dispatch ]);

    useEffect(() => {
        type === "admin" 
            ? setCountries(countriesData) 
            : setCountries(countriesData.filter(country => country.isChecked));
    }, [ countriesData ]);

    useEffect(() => {
        if (type === "countries") {
            setStyles({
                borderRadius: "5px",
                width: "100%" 
            });
        }
    }, [ type ]);

    return {
        scrollingData,
        isPending,
        search,
        styles,
        handleSearch,
    };  
};

export default useCountriesFull;