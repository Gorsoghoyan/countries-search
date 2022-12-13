import { AiOutlinePlus } from "react-icons/ai";
import { useSearch } from "../../CustomHook/useSearch";
import { column } from "./tableColumn";
import SearchInput from "../../Components/SearchInput";
import useAccounts from "../../CustomHook/useAccounts";
import Table from "../../Components/Table";
import s from "./styles.module.scss";

function Accounts () {
    const { accounts, openSubUserPopup } = useAccounts();
    const { filteredData, search, handleSearch } = useSearch(accounts);

    return (
        <section className={s.accounts}>
            <div className={s.topPart}>
                <SearchInput 
                    search={search}
                    setSearch={handleSearch}
                    placeholder="Search by sub-user name"
                />
                <button onClick={openSubUserPopup}>
                    <AiOutlinePlus />Add user
                </button>
            </div>
            <div className={s.usersContainer}>
                {filteredData ?
                    <Table 
                        type="users"
                        column={column}
                        data={filteredData}
                    /> :
                    <h2>There is no sub-user yet</h2>
                }
            </div>
        </section>
    );
}

export default Accounts;