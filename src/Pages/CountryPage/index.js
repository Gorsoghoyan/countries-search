import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { selectCountries } from "../../Redux/selections";
import "./styles.css";

function CountryPage () {
    // const countries = useSelector(selectCountries);
    // const { id } = useParams();
    // const [ name, setName ] = useState('');

    // useEffect(() => {
    //     countries.find(country => {
    //         if (country.id === +id) {
    //             localStorage.setItem("country", country.name);
    //         }
    //     });
    // }, [ id ]);

    // useEffect(() => {
    //     setName(localStorage.getItem('country'));
    //     return () => localStorage.removeItem('country');
    // }, []);

    return (
        <div className="countryPage">
            {/* {name && <h2>{name}</h2>} */}
            Country page
        </div>
    );
}

export default CountryPage;