import { AiFillEdit } from "react-icons/ai";
import { RiDeleteBinLine } from "react-icons/ri";
import s from "./styles.module.scss";

const SubUserRow = ({ subUser, onDelete, onEdit }) => {
    return (
        <tr className={s.subUserRow}>
            <td className={s.text}>{subUser.userName}</td>
            <td className={s.subUserActions}>
                <div className={s.flex}>
                    <AiFillEdit onClick={() => onEdit()}/>
                    <RiDeleteBinLine onClick={() => onDelete(subUser.id)} />  
                </div>
            </td>
        </tr>
    );
};

export default SubUserRow;

