import { RiDeleteBinLine } from "react-icons/ri";
import { AiFillEdit } from "react-icons/ai";
import s from "./styles.module.scss";

const TableRow = ({ country, onChange, onDelete, onEdit }) => {
    return (
        <tr>
            <td className={s.name}>{country.name}</td>
            <td className={s.actions}>
                <div className={s.flex}>
                    <input 
                        type="checkbox" 
                        checked={country.checked}
                        onChange={e => onChange(e, country.id)}
                    />
                    <AiFillEdit onClick={() => onEdit(country)}/>
                    <RiDeleteBinLine onClick={() => onDelete(country.id)} />  
                </div>
            </td>
        </tr>
    );
};

export default TableRow;