import SearchInput from "../../Components/SearchInput";
import Loading from "../../Components/Loading";
import useAdminCountries from "../../CustomHook/useAdminCountries";
import CountryItem from "../../Components/CountryItem";
import { AiOutlinePlus } from "react-icons/ai";
import s from "./styles.module.scss";

function AdminCountries () {
    const { 
        search,
        isPending,
        scrollingData, 
        onEdit, 
        onChange, 
        onDelete, 
        handleSearch,
        handleAddPopup 
    } = useAdminCountries();

    return (
        <section className={s.adminCountries}>
            <div className={s.searchContainer}>
                <div className={s.inputContainer}>
                    <SearchInput 
                        search={search}
                        setSearch={handleSearch}
                    />
                    {isPending && <Loading />}
                </div>
                <button><AiOutlinePlus />Add country</button>
            </div>
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