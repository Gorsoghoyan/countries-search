import useTable from "../../CustomHook/useTable";
import TableHeadItem from "./TableHeadItem";
import SubUserRow from "./SubUserRow";
import s from "./styles.module.scss";

function Table ({ data, column, type }) {
    const { onEditUser, onDeleteUser } = useTable();

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
                {type === "users" && 
                    data?.map(subUser => <SubUserRow
                        key={subUser.id}
                        subUser={subUser}
                        onDelete={onDeleteUser}
                        onEdit={onEditUser}
                    />) 
                }
            </tbody>
        </table>
    );
}

export default Table;