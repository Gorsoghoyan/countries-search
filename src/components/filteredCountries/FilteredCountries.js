import FilteredItem from "./FilteredItem";

function FilteredCountries ({ isPending, filteredCountries }) {

    return (
        <div className="filteredCountries">
            <h2>Countries</h2>
            {isPending && <p>Updating list...</p>}
            {filteredCountries && filteredCountries.map((country, idx) => 
                <FilteredItem 
                    key={idx} 
                    countryName={country.name} 
                />
            )}
        </div>
    );
}

export default FilteredCountries;