import useTable from "../../CustomHook/useTable";
import { RiDeleteBinLine } from "react-icons/ri";
import { AiFillEdit } from "react-icons/ai";
import "./styles.css";

function CountriesTable () {
    const { countries, onChange, onDelete, onEdit } = useTable();

    return (
        <div className="tableContainer">
            <button className="newCountry">New country</button>
            <table border="1" className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {countries?.map((country) => 
                        <tr key={country.id}>
                            <td className="name">{country.name}</td>
                            <td>
                                <div className="actions">
                                    <input 
                                        type="checkbox" 
                                        checked={country.checked}
                                        onChange={e => onChange(e, country.id)} 
                                    />
                                    <AiFillEdit 
                                        className="edit" 
                                        onClick={() => onEdit(country.id)} 
                                    />
                                    <RiDeleteBinLine 
                                        className="delete" 
                                        onClick={() => onDelete(country.id)} 
                                    />
                                </div>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>        
    );
}

export default CountriesTable;