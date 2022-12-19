import SearchInput from "../../Components/SearchInput";
import Loading from "../../Components/Loading";
import useAdminCountries from "../../CustomHook/useAdminCountries";
import CountryItem from "../../Components/CountryItem";
import { useSearch } from "../../CustomHook/useSearch";
import s from "./styles.module.scss";

function AdminCountries () {
    const { countries, scrollingData, onChange, onEdit, onDelete, handleAddPopup } = useAdminCountries();
    const { isPending, filteredData, search, handleSearch } = useSearch(countries);

    return (
        <section className={s.adminCountries}>
            {/* <SearchInput /> */}
            <div className={s.countriesContainer}>
                {scrollingData?.map(country => 
                    <CountryItem 
                        key={country.id}
                        country={country}
                        onChange={onChange}
                        onEdit={""}
                        onDelete={onDelete}
                    />    
                )}
            </div>
        </section>
    );
}

export default AdminCountries;