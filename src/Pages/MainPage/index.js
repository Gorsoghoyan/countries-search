import FilteredCountryItem from "../../Components/FilteredCountryItem";
import Loading from "../../Components/Loading";
import SearchInput from "../../Components/SearchInput";
import useMain from "../../CustomHook/useMain";
import { useSearch } from "../../CustomHook/useSearch";
import s from "./styles.module.scss";

function MainPage () {
    const { countries } = useMain();
    const { filteredData, isPending, search, handleSearch } = useSearch(countries);

    return (
        <section className={s.mainPage}>
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
                            countryName={country.name}
                            link={country.id}
                        />
                    ) : <h2>Is empty</h2>
                }
            </div>
        </section>
    );
}

export default MainPage;