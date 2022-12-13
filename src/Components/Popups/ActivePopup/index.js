import Country from "../Country";
import AddCountry from "../AddCountry";
import AddSubUser from "../AddSubUser";
import EditCountry from "../EditCountry";
import { useSelector } from "react-redux";
import { selectPopup } from "../../../Redux/selections";
import s from "./styles.module.scss";

function ActivePopup () {
    const { addCountry, editCountry, country, activePopup, addSubUser } = useSelector(selectPopup);

    return (
        true &&
        <div className={s.popupContainer}>
            {addCountry.open && <AddCountry />}
            {editCountry.open && <EditCountry country={editCountry.data} />}
            {country.open && <Country country={country.data} />}
            {/* {addSubUser.open && <AddSubUser />} */}
            <AddSubUser />
        </div>
    );
}

export default ActivePopup;