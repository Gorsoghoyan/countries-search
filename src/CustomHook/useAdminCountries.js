import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../Redux/actions";
import { selectCountries, selectPopup } from "../Redux/selections";
import { openAddPopup } from "../Redux/setter";
import useScrollHistory from "./useScrollHistory";

const useAdminCountries = () => {
    const [ countries, setCountries ] = useState(null);
    const { openAdd, openEdit, countryData } = useSelector(selectPopup);
    const countriesData = useSelector(selectCountries);
    const nodeRef = useScrollHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCountries());
    }, [ dispatch ]);

    useEffect(() => {
        setCountries(countriesData);
    }, [ countriesData ]);

    const handleAddPopup = () => {
        dispatch(openAddPopup());  
    };

    return {
        countries,
        openAdd,
        openEdit,
        countryData,
        nodeRef,
        handleAddPopup
    };  
};

export default useAdminCountries;