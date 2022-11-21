import { useEffect, useState, useTransition } from "react";
import { useSelector } from "react-redux";
import { selectCountries } from "../Redux/Slices/CountriesSlice";

const useSearch = () => {
    const countriesData = useSelector(selectCountries);
    const [ isPending, startTransition ] = useTransition();
    const [ filteredCountries, setFilteredCountries ] = useState([]);
    const [ checkedCountries, setCheckedCountries ] = useState([]);
    const [ search, setSearch ] = useState("");

    useEffect(() => {
        setCheckedCountries(countriesData.filter(country => country.checked));
    }, [ countriesData ]);

    useEffect(() => {
        startTransition(() => setFilteredCountries(checkedCountries.filter(country => {
            return country.name.toLowerCase().includes(search.toLowerCase().trim());
        })));
    }, [ search, startTransition, checkedCountries ]);

    return {
        filteredCountries,
        search,
        setSearch,
        isPending
    };
};

export default useSearch;