import { useEffect, useState, useTransition } from "react";

export const useSearch = ( countries ) => {
    const [ filteredData, setFilteredData ] = useState(null);
    const [ search, setSearch ] = useState("");
    const [ isPending, startTransition ] = useTransition();

    useEffect(() => {
        if (!countries?.length) return;
        if (!search.length) return setFilteredData(countries);
        setFilteredData(countries.filter(country => 
            country.name.toLowerCase().includes(search.toLowerCase().trim())
        ));
    }, [ search ]);

    useEffect(() => {
        countries && setFilteredData(countries);
    }, [ countries ]);

    const handleSearch = (value) => {
        startTransition(() => {
            setSearch(value);
        });
    };

    return {
        filteredData,
        filteredData,
        isPending,
        handleSearch
    };  
};