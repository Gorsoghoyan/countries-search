import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewCountry, editCountryData, getCountries } from "../Redux/actions";
import { selectCountries, selectEditPopupData, selectOpenAddPopup } from "../Redux/selections";
import { closeAddPopup, closeEditPopup, openAddpopup } from "../Redux/setter";

const useDashboard = () => {
    const countriesData = useSelector(selectCountries);
    const countryData = useSelector(selectEditPopupData);
    const openAddPopup = useSelector(selectOpenAddPopup);
    const [ countries, setCountries ] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCountries());
    }, [ dispatch ]);

    useEffect(() => {
        setCountries(countriesData);
    }, [ countriesData ]);

    const onCloseEditPopup = () => dispatch(closeEditPopup());

    const onCLoseAddPopup = () => dispatch(closeAddPopup());

    const onEditCountryData = (id, editedData) => {
        dispatch(editCountryData(id, editedData));
        dispatch(closeEditPopup());
    }; 

    const onAddNewCountry = (newCountry) => {
        dispatch(addNewCountry(newCountry));
        dispatch(closeAddPopup());
    };

    const onOpenAddPopup = () => {
        dispatch(openAddpopup());
    };

    return {
        countries,
        countryData,
        openAddPopup,
        onCloseEditPopup,
        onEditCountryData,
        onOpenAddPopup,
        onCLoseAddPopup,
        onAddNewCountry
    };  
};

export default useDashboard;