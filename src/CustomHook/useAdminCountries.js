import { useDispatch } from "react-redux";
import { changeCountryCheckbox, deleteCountry } from "../Redux/actions";
import { openAddCountryPopup, openEditCountryPopup } from "../Redux/setter";

const useAdminCountries = () => {
    const dispatch = useDispatch();

    const handleAddPopup = () => {
        dispatch(openAddCountryPopup());  
    };

    const handleEditPopup = (country) => {
        dispatch(openEditCountryPopup(country));
    };

    const onChange = (e, id) => {
        dispatch(changeCountryCheckbox(e, id));
    };

    const onDelete = (id) => {
        dispatch(deleteCountry(id));
    };

    return {
        onChange,
        onDelete,
        handleAddPopup,
        handleEditPopup
    };  
};

export default useAdminCountries;