import { useEffect, useState, useTransition } from "react";
import { countriesArray } from "../fakeData/countries";

const useApp = () => {
    const [ search, setSearch ] = useState("");
    const [ isPending, startTransition ] = useTransition();
    const [ filteredCountries, setFilteredCountries ] = useState(null);

    const handleSearch = (value) => {
        setSearch(value);
    };

    useEffect(() => {
        startTransition(() => {
            setFilteredCountries(countriesArray.filter(country => {
                return !!(country.name.toLowerCase().includes(search.toLowerCase().trim()));
            }));
        });
    }, [ search ]);

    return {
        handleSearch,
        isPending,
        filteredCountries
    };
};

export default useApp;