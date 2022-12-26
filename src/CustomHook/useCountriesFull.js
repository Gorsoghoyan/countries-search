import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../Redux/actions";
import { selectCountries, selectCountryPermissions } from "../Redux/selections";
import { useSearch } from "./useSearch";
import useInfiniteScrolling from "./useInfiniteScrolling";
import useScrollHistory from "./useScrollHistory";

const permissionsConfig = { add: true, edit: true, select: true, delete: true };

const useCountriesFull = (type) => {
    const [ countries, setCountries ] = useState(null);
    const [ permissions, setPermissions ] = useState(permissionsConfig);
    const { isPending, filteredData, search, handleSearch } = useSearch(countries);
    const { scrollingData } = useInfiniteScrolling(40, filteredData);
    const permissionsObj = useSelector(selectCountryPermissions);
    const countriesData = useSelector(selectCountries);
    const dispatch = useDispatch();
    useScrollHistory();

    useEffect(() => {
        dispatch(getCountries());
    }, [ dispatch ]);

    useEffect(() => {
        permissionsObj && setPermissions(permissionsObj);
    }, [ permissions ]);

    useEffect(() => {
        type === "admin" 
            ? setCountries(countriesData) 
            : setCountries(countriesData.filter(country => country.isChecked));
    }, [ countriesData ]);

    return {
        scrollingData,
        isPending,
        search,
        permissions,
        handleSearch,
    };  
};

export default useCountriesFull;