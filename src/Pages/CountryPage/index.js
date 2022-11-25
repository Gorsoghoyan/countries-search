import useCountry from "../../CustomHook/useCountry";
import s from "./styles.module.scss";

function CountryPage () {
    const { country } = useCountry();

    return (
        <div className={s.countryPage}>
            {country ? 
            <>
                <h2>{country.name}</h2>
                <p><span>capital of the {country.name}:</span>{country.capital}</p>
                <p><span>Description of the {country.name}:</span>{country.description}</p>
            </>
            : <h2>Wait...</h2>}
        </div>
    );
}

export default CountryPage;