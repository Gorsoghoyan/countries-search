import CountriesTable from "../../Components/CountriesTable";
import SearchInput from "../../Components/SearchInput";
import useDashboard from "../../CustomHook/useDashboard";
import Loading from "../../Components/Loading";
import EditPopup from "../../Components/EditPopup";
import AddPopup from "../../Components/AddPopup";
import { useSearch } from "../../CustomHook/useSearch";
import s from "./styles.module.scss";

function DashboardPage () {
    const { 
        countries, 
        countryData,
        onCloseEditPopup, 
        onEditCountryData,
        openAddPopup,
        onOpenADdPopup,
        onCLoseAddPopup,
        onAddNewCountry
    } = useDashboard();
    const { search, isPending, filteredData, handleSearch } = useSearch(countries);

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
                <button onClick={onOpenADdPopup}>Add country</button>
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
            {countryData && <EditPopup 
                country={countryData} 
                onClose={onCloseEditPopup}
                onEditCountryData={onEditCountryData}
            />}
            {openAddPopup && <AddPopup 
                onClose={onCLoseAddPopup}
                onAddNewCountry={onAddNewCountry}
            />} 
        </div>
    );
}

export default DashboardPage;