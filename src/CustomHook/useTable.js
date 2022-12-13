import { useDispatch } from "react-redux";
import { changeCountryCheckbox, deleteCountry } from "../Redux/actions";
import { openEditCountryPopup } from "../Redux/setter";

const useTable = () => {
    const dispatch = useDispatch();
    
    const onChangeCountry = (evt, id) => dispatch(changeCountryCheckbox(evt, id));

    const onDeleteCountry = (id) => dispatch(deleteCountry(id));

    const onEditCountry = (country) => {
        dispatch(openEditCountryPopup(country));
    };

    const onDeleteUser = () => {
    };

    const onEditUser = () => {
    };

    return {
        onChangeCountry,
        onDeleteCountry,
        onEditCountry,
        onDeleteUser,
        onEditUser
    };
};

export default useTable;