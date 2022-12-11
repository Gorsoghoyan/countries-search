import useTable from "../../CustomHook/useTable";
import TableHeadItem from "./TableHeadItem";
import CountryRow from "./CountryRow";
import UserRow from "./UserRow";
import s from "./styles.module.scss";

function Table ({ data, column, type }) {
    const { 
        onChangeCountry, onDeleteCountry, onEditCountry,
        onEditUser, onDeleteUser
    } = useTable();

    return (
        <table border="1" className={s.table}>
            <thead>
                <tr>
                    {column?.map((item, index) => 
                        <TableHeadItem key={index} title={item.title} />
                    )}
                </tr>
            </thead>
            <tbody>
                {type === "countries" && 
                    data?.map(country => <CountryRow 
                        key={country.id}
                        country={country}
                        onChange={onChangeCountry}
                        onDelete={onDeleteCountry}
                        onEdit={onEditCountry}
                    />)
                }
                {type === "users" && 
                    data?.map(user => <UserRow
                        key={user.id}
                        user={user}
                        onDelete={onDeleteUser}
                        onEdit={onEditUser}
                    />) 
                }
            </tbody>
        </table>
    );
}

export default Table;