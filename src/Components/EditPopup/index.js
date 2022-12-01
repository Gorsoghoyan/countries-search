import { useDispatch } from "react-redux";
import { editCountryData } from "../../Redux/actions";
import { closeEditPopup } from "../../Redux/setter";
import PopupTemplate from "../PopupTemplate";

function EditPopup ({ countryData }) {
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
            country={countryData}
            onClose={handleClose}
            onSetData={handleSetData}
        />
    );
}

export default EditPopup;