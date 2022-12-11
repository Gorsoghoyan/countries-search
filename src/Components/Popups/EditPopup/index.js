import { editCountryData } from "../../../Redux/actions";
import { closeEditPopup } from "../../../Redux/setter";
import { useDispatch } from "react-redux";
import PopupTemplate from "../PopupTemplate";

function EditPopup ({ country }) {
    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch(closeEditPopup());
    };  

    const handleSetData = (id, editedCountry) => {
        dispatch(editCountryData(id, editedCountry));
    };

    return (
        <PopupTemplate 
            type="Edit"
            title="Edit country"
            country={country}
            onClose={handleClose}
            onSetData={handleSetData}
        />
    );
}

export default EditPopup;