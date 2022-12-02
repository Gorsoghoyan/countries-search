import { useDispatch } from "react-redux";
import { changeCountryCheckbox, deleteCountry } from "../Redux/actions";
import { openEditPopup } from "../Redux/setter";

const useTable = () => {
    const dispatch = useDispatch();
    
    const onChange = (evt, id) => dispatch(changeCountryCheckbox(evt, id));

    const onDelete = (id) => dispatch(deleteCountry(id));

    const onEdit = (country) => {
        dispatch(openEditPopup(country));
    };

    return {
        onChange,
        onDelete,
        onEdit
    };
};

export default useTable;