import Country from "../Country";
import AddCountry from "../AddCountry";
import AddSubUser from "../AddSubUser";
import EditCountry from "../EditCountry";
import { useSelector } from "react-redux";
import { selectPopup } from "../../../Redux/selections";
import { useEffect } from "react";
import s from "./styles.module.scss";

function ActivePopup () {
    const { addCountry, editCountry, country, activePopup, addSubUser } = useSelector(selectPopup);

    useEffect(() => {
        if (activePopup.open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [ activePopup ]);

    return (
        activePopup.open &&
        <div className={s.popupContainer}>
            {addCountry.open && <AddCountry />}
            {editCountry.open && <EditCountry country={editCountry.data} />}
            {country.open && <Country country={country.data} />}
            {addSubUser.open && <AddSubUser />}
        </div>
    );
}

export default ActivePopup;