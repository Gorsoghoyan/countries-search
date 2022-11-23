import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeCountryCheckbox, deleteCountry, getCountries } from "../Redux/actions";
import { selectCountries } from "../Redux/selections";

const useTable = () => {
    const countriesData = useSelector(selectCountries);
    const [ countries, setCountries ] = useState(null); 
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCountries());
    }, []);

    useEffect(() => {   
        setCountries(countriesData);
    }, [ countriesData ]);

    const onChange = (evt, id) => {
        dispatch(changeCountryCheckbox(evt, id));
    };

    const onDelete = (id) => {
        dispatch(deleteCountry(id));
    };

    const onEdit = () => {
        
    };

    return {
        countries,
        onChange,
        onDelete,
        onEdit
    };
};

export default useTable;