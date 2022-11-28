import useTable from "../../CustomHook/useTable";
import TableHeadItem from "./TableHeadItem";
import TableRow from "./TableRow";
import s from "./styles.module.scss";

const column = [
    {title: "Name"},
    {title: "Actions"}
];

function CountriesTable ({ filteredCountries }) {
    const { onChange, onDelete, onEdit, onRead } = useTable();

    return (
        <table border="1" className={s.countriesTable}>
            <thead>
                <tr>
                    {column.map((item, index) => 
                        <TableHeadItem key={index} title={item.title} />
                    )}
                </tr>
            </thead>
            <tbody>
                {filteredCountries?.map(country =>
                    <TableRow 
                        key={country.id}
                        country={country}
                        onChange={onChange}
                        onDelete={onDelete}
                        onRead={onRead}
                        onEdit={onEdit}
                    />    
                )}
            </tbody>
        </table>
    );
}

export default CountriesTable;