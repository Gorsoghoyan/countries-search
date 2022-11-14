import { countriesArray } from "../../fakeData/countries";

function CountryItem ({ id, countryName }) {

    const handleChange = (evt) => {
        countriesArray.filter(country => {
            if (country.id === id) {
                country.isCheck = evt.target.checked;
            }
        });
    };

    return (
        <div className="countryitem">
            <span>{countryName}</span>
            <input type="checkbox" onChange={handleChange} />
        </div>
    );
}

export default CountryItem;