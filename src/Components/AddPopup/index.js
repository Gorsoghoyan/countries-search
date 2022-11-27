import { useDispatch } from "react-redux";
import { addNewCountry } from "../../Redux/actions";
import { closeAddPopup } from "../../Redux/setter";
import PopupTemplate from "../PopupTemplate";

function AddPopup () {
    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch(closeAddPopup());
    };

    const handleSetData = (newCountry) => {
        dispatch(addNewCountry(newCountry));
    };

    return (
        <PopupTemplate 
            type="Add"
            title="Add country"
            onClose={handleClose}
            onSetData={handleSetData}
        />
    );
}

export default AddPopup;