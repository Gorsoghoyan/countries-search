import { useEffect, useState, useTransition } from "react";

export const useSearch = (data, type) => {
    const [ search, setSearch ] = useState("");
    const [ initialData, setInitialData ] = useState(null);
    const [ filteredData, setFilteredData ] = useState(null);
    const [ isPending, startTransition ] = useTransition();

    useEffect(() => {
        if (!initialData?.length) return;
        if (!search) return setFilteredData(initialData);
        // if (type === "subUsers") {
        //     setFilteredData(data.filter(item => 
        //         item.data.userName.toLowerCase().includes(search.toLowerCase().trim())
        //     ));
        //     return;
        // }
        setFilteredData(initialData.filter(item => 
            item.name.toLowerCase().includes(search.toLowerCase().trim())
        ));
    }, [ search, initialData ]);

    useEffect(() => {
        if (search) {
            setSearch(search);
        }
        data && setInitialData(data);
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