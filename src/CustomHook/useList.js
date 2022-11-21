import { useSelector, useDispatch } from "react-redux";
import { itemCheckboxToggle, selectCountries } from "../Redux/Slices/CountriesSlice";

const useList = () => {
    const countriesData = useSelector(selectCountries);
    const dispatch = useDispatch();

    const handleChangeCheckbox = (event, id) => {
        dispatch(itemCheckboxToggle(event, id));
    };

    return {
        countriesData,
        handleChangeCheckbox
    };
};

export default useList;