import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeCountryCheckbox, deleteCountry, getCountries } from "../Redux/actions";
import { selectCountries } from "../Redux/selections";
import { openAddCountryPopup } from "../Redux/setter";
import useInfiniteScrolling from "./useInfiniteScrolling";
import useScrollHistory from "./useScrollHistory";

const useAdminCountries = () => {
    const [ countries, setCountries ] = useState(null);
    const countriesData = useSelector(selectCountries);
    const { scrollingData } = useInfiniteScrolling(40, countries);
    const dispatch = useDispatch();
    useScrollHistory();

    useEffect(() => {
        dispatch(getCountries());
    }, [ dispatch ]);

    useEffect(() => {
        setCountries(countriesData);
    }, [ countriesData ]);

    const handleAddPopup = () => {
        dispatch(openAddCountryPopup());  
    };

    const onChange = (e, id) => {
        dispatch(changeCountryCheckbox(e, id));
    };

    const onDelete = (id) => {
        dispatch(deleteCountry(id));
    };

    return {
        countries,
        scrollingData,
        onChange,
        onDelete,
        handleAddPopup
    };  
};

export default useAdminCountries;