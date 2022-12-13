import FilteredCountryItem from "../../Components/FilteredCountryItem";
import GoBack from "../../Components/goBack";
import Loading from "../../Components/Loading";
import SearchInput from "../../Components/SearchInput";
import useCountries from "../../CustomHook/useCountries";
import { useSearch } from "../../CustomHook/useSearch";
import s from "./styles.module.scss";

function Countries () {
    const { countries, nodeRef, token, openPopup } = useCountries();
    const { filteredData, isPending, search, handleSearch } = useSearch(countries);

    return (
        <section className={s.countries} ref={nodeRef}>
            {token && <GoBack />}
            <div className={s.inputWrapper}>
                <SearchInput    
                    search={search}
                    setSearch={handleSearch}
                    placeholder="Search by country name"
                />
                {isPending && <Loading />}
            </div>
            <div className={s.filteredCountries}>
                {filteredData?.length ? 
                    filteredData.map(country => 
                        <FilteredCountryItem 
                            key={country.id}
                            country={country}
                            openPopup={openPopup}
                        />
                    ) : <h2>Is empty</h2>
                }
            </div>
        </section>
    );
}

export default Countries;