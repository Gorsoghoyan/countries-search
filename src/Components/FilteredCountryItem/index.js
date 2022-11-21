import { Link } from "react-router-dom";
import "./styles.css";

function FilteredCountryItem ({ id, name }) {

    return (
        <Link 
            to={`/country/${id}`}
            className="filteredCountryitem"
        >
            <p>{name}</p>
        </Link>
    );
}

export default FilteredCountryItem;