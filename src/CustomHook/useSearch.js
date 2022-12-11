import { useEffect, useState, useTransition } from "react";

export const useSearch = (data) => {
    const [ search, setSearch ] = useState("");
    const [ filteredData, setFilteredData ] = useState(null);
    const [ isPending, startTransition ] = useTransition();

    useEffect(() => {
        if (!data?.length) return;
        if (!search.length) return setFilteredData(data);
        setFilteredData(data.filter(item => 
            item.name.toLowerCase().includes(search.toLowerCase().trim())
        ));
    }, [ search ]);

    useEffect(() => {
        data?.length && setFilteredData(data);
    }, [ data ]);

    const handleSearch = (value) => {
        startTransition(() => {
            setSearch(value);
        });
    };

    return {
        filteredData,
        isPending,
        search,
        handleSearch
    };  
};