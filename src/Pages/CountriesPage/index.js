import CountryDetailsPopup from "../../Components/CountryDetailsPopup";
import FilteredCountryItem from "../../Components/FilteredCountryItem";
import GoBack from "../../Components/goBack";
import Loading from "../../Components/Loading";
import SearchInput from "../../Components/SearchInput";
import useCountries from "../../CustomHook/useCountries";
import { useSearch } from "../../CustomHook/useSearch";
import s from "./styles.module.scss";

function Countries () {
    const { countries, country, nodeRef, token, closeCountryPopup, showCountryPopup } = useCountries();
    const { filteredData, isPending, search, handleSearch } = useSearch(countries);

    return (
        <>
        <section className={s.countries} ref={nodeRef}>
            {token && <GoBack />}
            <div className={s.inputWrapper}>
                <SearchInput    
                    search={search}
                    setSearch={handleSearch}
                />
                {isPending && <Loading />}
            </div>
            <div className={s.filteredCountries}>
                {filteredData?.length ? 
                    filteredData.map(country => 
                        <FilteredCountryItem 
                            key={country.id}
                            country={country}
                            showCountryPopup={showCountryPopup}
                        />
                    ) : <h2>Is empty</h2>
                }
            </div>
        </section>
        {country && <CountryDetailsPopup 
            country={country} 
            closeCountryPopup={closeCountryPopup}
        />}
        </>
    );
}

export default Countries;