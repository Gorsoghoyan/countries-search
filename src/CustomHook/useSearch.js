import { useEffect, useState, useTransition } from "react";
import { useSelector } from "react-redux";
import { selectCountries, selectMenuToggle } from "../Redux/selections";

const useSearch = () => {
    const countriesData = useSelector(selectCountries);
    const menuToggle = useSelector(selectMenuToggle);
    const [ isPending, startTransition ] = useTransition();
    const [ filteredCountries, setFilteredCountries ] = useState([]);
    const [ checkedCountries, setCheckedCountries ] = useState([]);
    const [ search, setSearch ] = useState("");
    const [ searchStyle, setSearchStyle ] = useState({});

    useEffect(() => {
        setCheckedCountries(countriesData.filter(country => country.checked));
    }, [ countriesData ]);

    useEffect(() => {
        startTransition(() => setFilteredCountries(checkedCountries.filter(country => {
            return country.name.toLowerCase().includes(search.toLowerCase().trim());
        })));
    }, [ search, startTransition, checkedCountries ]);

    useEffect(() => {
        if (menuToggle) {
            setSearchStyle({ marginLeft: 250, width: "calc(100% - 250px)" });
        } else {
            setSearchStyle({ marginLeft: 0, width: "100%" });
        }
    }, [ menuToggle ]);

    return {
        filteredCountries,
        search,
        setSearch,
        isPending,
        searchStyle
    };
};

export default useSearch;