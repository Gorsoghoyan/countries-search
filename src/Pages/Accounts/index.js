import { AiOutlinePlus } from "react-icons/ai";
import { useSearch } from "../../CustomHook/useSearch";
import { column } from "./tableColumn";
import useAccounts from "../../CustomHook/useAccounts";
import SearchBlock from "../../Components/SearchBlock";
import GoBack from "../../Components/goBack";
import Table from "../../Components/Table";
import s from "./styles.module.scss";

function Accounts () {
    const { subUsers, openSubUserPopup } = useAccounts();
    const { filteredData, isPending, search, handleSearch } = useSearch(subUsers, "subUsers");

    return (
        <section className={s.accounts}>
            <SearchBlock 
                type="accounts"
                btnText={"Add sub-user"}
                placeholder={"Search by sub-user name"}
                search={search}
                isPending={isPending}
                btnIsVisible={true}
                btnIcon={<AiOutlinePlus />}
                handleSearch={handleSearch}
                handleClick={openSubUserPopup}
            />
            <div className={s.usersContainer}>
                {filteredData?.length ?
                    <Table 
                        type="users"
                        column={column}
                        data={filteredData}
                    /> :
                    <h2>There is no sub-user yet</h2>
                }
            </div>
            <GoBack />
        </section>
    );
}

export default Accounts;