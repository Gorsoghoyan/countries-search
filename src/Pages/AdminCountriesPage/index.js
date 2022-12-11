import Table from "../../Components/Table";
import SearchInput from "../../Components/SearchInput";
import Loading from "../../Components/Loading";
import useAdminCountries from "../../CustomHook/useAdminCountries";
import { useSearch } from "../../CustomHook/useSearch";
import s from "./styles.module.scss";

function AdminCountries () {
    const { countries, nodeRef, handleAddPopup } = useAdminCountries();
    const { isPending, filteredData, search, handleSearch } = useSearch(countries);

    return (
        <section className={s.adminCountries} ref={nodeRef}>
            <div className={s.topContainer}>
                <div className={s.inputWrapper}>
                    <SearchInput 
                        search={search}
                        setSearch={handleSearch}
                        placeholder="Search by country name"
                    />
                    {isPending && <Loading />}
                </div>
                <button onClick={handleAddPopup}>Add country</button>
            </div>
            <div className={s.tableContainer}>
                {filteredData ? 
                    filteredData.length ? 
                    <Table 
                        type="countries"
                        data={filteredData}
                        column={[
                            {title: "Name"},
                            {title: "Actions"}
                        ]}
                    /> : <h2>No such country found</h2>
                    : <h2>Loading...</h2>
                }
            </div>
        </section>
    );
}

export default AdminCountries;