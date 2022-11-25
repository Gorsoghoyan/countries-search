import { Link } from "react-router-dom";
import s from "./styles.module.scss";

function FilteredCountryItem ({ countryName, link }) {
    return (
        <Link className={s.link} to={`/country/${link}`}>
            <p>{countryName}</p>
        </Link>
    );
}

export default FilteredCountryItem;