import { countriesArray } from "../../fakeData/countries";
import CountryItem from "./CountryItem";

function CountriesList () {
    return (
        <div className="countriesList">
            <h2>Countries List</h2>
            {countriesArray.map((country, idx) => 
                <CountryItem
                    key={country.id}
                    id={country.id}
                    countryName={country.name}
                />
                )}
        </div>
    );
}

export default CountriesList;