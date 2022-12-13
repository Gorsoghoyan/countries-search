import { addNewCountry } from "../../../Redux/actions";
import { useDispatch } from "react-redux";
import { closeAddCountryPopup } from "../../../Redux/setter";
import AddAndEditCountryTemplate from "../AddAndEditCountryTemplate";

function AddCountry () {
    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch(closeAddCountryPopup());
    };

    const handleSetData = (newCountry) => {
        dispatch(addNewCountry(newCountry));
    };

    return (
        <AddAndEditCountryTemplate 
            type="Add"
            title="Add country"
            onClose={handleClose}
            onSetData={handleSetData}
        />
    );
}

export default AddCountry;