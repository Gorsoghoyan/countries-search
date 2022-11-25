import CountriesTable from "../../Components/CountriesTable";
import SearchInput from "../../Components/SearchInput";
import useDashboard from "../../CustomHook/useDashboard";
import Loading from "../../Components/Loading";
import Popup from "../../Components/Popup";
import { useSearch } from "../../CustomHook/useSearch";
import s from "./styles.module.scss";

function DashboardPage () {
    const { 
        countries, 
        countryData,
        openAddPopup,
        onCloseEditPopup, 
        onEditCountryData,
        onOpenAddPopup,
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
                <button onClick={onOpenAddPopup}>Add country</button>
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
            {countryData && <Popup 
                name={countryData.name}
                capital={countryData.capital}
                description={countryData.description}
                id={countryData.id}
                btnText={"Edit"}
                title={"Edit country"}
                onClose={onCloseEditPopup}
                onSetData={onEditCountryData}
            />}
            {openAddPopup && <Popup 
                btnText={"Add"}
                title={"Add country"}
                onClose={onCLoseAddPopup}
                onSetData={onAddNewCountry}
            />} 
        </div>
    );
}

export default DashboardPage;