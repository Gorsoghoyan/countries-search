import { useParams } from "react-router-dom";
import { selectCountries } from "../../Redux/Slices/CountriesSlice";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import "./styles.css";

function Country () {
    const countries = useSelector(selectCountries);
    const [ country, setCountry ] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        countries.find(country => (country.id === +id) && setCountry(country));
    }, [ id ]);

    return (
        <div className="countryPage">
            {country?.name}
        </div>
    );
}

export default Country;