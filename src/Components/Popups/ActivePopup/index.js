import useActivePopup from "../../../CustomHook/useActivePopup";
import AddPopup from "../AddPopup";
import EditPopup from "../EditPopup";
import CountryPopup from "../CountryPopup";
import s from "./styles.module.scss";

function ActivePopup () {
    const { addPopup, editPopup, countryPopup, activePopup } = useActivePopup();

    return (
        activePopup?.open &&
        <div className={s.popupContainer}>
            {addPopup.open && <AddPopup />}
            {editPopup.open && <EditPopup country={editPopup.data} />}
            {countryPopup.open && <CountryPopup country={countryPopup.data} />}
        </div>
    );
}

export default ActivePopup;