import { useDispatch } from "react-redux";
import { changeCountryCheckbox, deleteCountry } from "../Redux/actions";
import { openEditPopup, openReadPopup } from "../Redux/setter";

const useTable = () => {
    const dispatch = useDispatch();
    
    const onChange = (evt, id) => dispatch(changeCountryCheckbox(evt, id));

    const onDelete = (id) => dispatch(deleteCountry(id));

    const onRead = (country) => {
        dispatch(openReadPopup(country));
    };

    const onEdit = (country) => {
        dispatch(openEditPopup(country));
    };

    return {
        onChange,
        onDelete,
        onEdit,
        onRead
    };
};

export default useTable;