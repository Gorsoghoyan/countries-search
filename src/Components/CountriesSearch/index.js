import useSearch from "../../CustomHook/useSearch";
import FilteredCountryItem from "../FilteredCountryItem";
import SearchInput from "../SearchInput";
import "./styles.css";

function CountriesSearch () {
    const { filteredCountries, search, isPending, setSearch, searchStyle } = useSearch();

    return (
        <section className="countriesSearch" style={searchStyle}>
            <SearchInput 
                search={search} 
                setSearch={setSearch} 
                isPending={isPending}
            />
            <div className="filteredCountries">
                {filteredCountries.length ?
                filteredCountries.map(country =>
                    <FilteredCountryItem
                        key={country.id}
                        id={country.id}
                        name={country.name}
                    />
                ) : <h2>Empty</h2>}
            </div>
        </section>
    );
}

export default CountriesSearch;