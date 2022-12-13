import { editCountryData } from "../../../Redux/actions";
import { useDispatch } from "react-redux";
import { closeEditCountryPopup } from "../../../Redux/setter";
import AddAndEditCountryTemplate from "../AddAndEditCountryTemplate";

function EditCountry ({ country }) {
    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch(closeEditCountryPopup());
    };  

    const handleSetData = (id, editedCountry) => {
        dispatch(editCountryData(id, editedCountry));
    };

    return (
        <AddAndEditCountryTemplate 
            type="Edit"
            title="Edit country"
            country={country}
            onClose={handleClose}
            onSetData={handleSetData}
        />
    );
}

export default EditCountry;