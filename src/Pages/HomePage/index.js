import CountriesTable from "../../Components/CountriesTable";
import SearchInput from "../../Components/SearchInput";
import Loading from "../../Components/Loading";
import AddPopup from "../../Components/AddPopup";
import EditPopup from "../../Components/EditPopup";
import useHome from "../../CustomHook/useHome";
import { useSearch } from "../../CustomHook/useSearch";
import s from "./styles.module.scss";

function HomePage () {
    const { countries, openAdd, openEdit, countryData, nodeRef, handleAddPopup } = useHome();
    const { isPending, filteredData, search, handleSearch } = useSearch(countries);

    return (
        <>
        <section className={s.homePage} ref={nodeRef}>
            <div className={s.topContainer}>
                <div className={s.inputWrapper}>
                    <SearchInput 
                        search={search}
                        setSearch={handleSearch}
                    />
                    {isPending && <Loading />}
                </div>
                <button onClick={handleAddPopup}>Add country</button>
            </div>
            <div className={s.tableContainer}>
                {filteredData ? 
                    filteredData.length ? 
                    <CountriesTable 
                        filteredCountries={filteredData}
                    /> : <h2>No such country found</h2>
                    : <h2>The page is empty</h2>
                }
            </div>
        </section>
        {openAdd && <AddPopup />}
        {openEdit && <EditPopup countryData={countryData} />}
        </>
    );
}

export default HomePage;