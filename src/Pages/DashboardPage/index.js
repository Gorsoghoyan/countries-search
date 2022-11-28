import CountriesTable from "../../Components/CountriesTable";
import SearchInput from "../../Components/SearchInput";
import useDashboard from "../../CustomHook/useDashboard";
import Loading from "../../Components/Loading";
import AddPopup from "../../Components/AddPopup";
import EditPopup from "../../Components/EditPopup";
import ReadPopup from "../../Components/ReadPopup";
import { useSearch } from "../../CustomHook/useSearch";
import s from "./styles.module.scss";

function DashboardPage () {
    const { countries, openAdd, openEdit, openRead, countryData, handleAddPopup } = useDashboard();
    const { isPending, filteredData, search, handleSearch } = useSearch(countries);

    return (
        <div className={s.dashboard}>
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
            {openAdd && <AddPopup />}
            {openEdit && <EditPopup countryData={countryData} />}
            {openRead && <ReadPopup countryData={countryData} />}
        </div>
    );
}

export default DashboardPage;