import { AiFillEdit } from "react-icons/ai";
import { RiDeleteBinLine } from "react-icons/ri";
import s from "./styles.module.scss";

const SubUserRow = ({ data, permissions, id, onDelete, onEdit }) => {
    return (
        <tr className={s.subUserRow}>
            <td className={s.text}>{data.userName}</td>
            <td className={s.subUserActions}>
                <div className={s.flex}>
                    <AiFillEdit onClick={() => onEdit()}/>
                    <RiDeleteBinLine onClick={() => onDelete(id)} />  
                </div>
            </td>
        </tr>
    );
};

export default SubUserRow;

