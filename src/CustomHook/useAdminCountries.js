import { useDispatch, useSelector } from "react-redux";
import { changeCountryCheckbox, deleteCountry } from "../Redux/actions";
import { selectCountryPermissions } from "../Redux/selections";
import { openAddCountryPopup, openEditCountryPopup } from "../Redux/setter";

const useAdminCountries = () => {
    const permissions = useSelector(selectCountryPermissions);
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
        permissions,
        onChange,
        onDelete,
        handleAddPopup,
        handleEditPopup
    };  
};

export default useAdminCountries;