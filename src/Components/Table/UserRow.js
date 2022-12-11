import { AiFillEdit } from "react-icons/ai";
import { RiDeleteBinLine } from "react-icons/ri";
import s from "./styles.module.scss";

const UserRow = ({ user, onDelete, onEdit }) => {
    return (
        <tr className={s.userTr}>
            <td></td>
            <td>
                <div className={s.flex}>
                    <AiFillEdit onClick={() => onEdit()}/>
                    <RiDeleteBinLine onClick={() => onDelete()} />  
                </div>
            </td>
        </tr>
    );
};

export default UserRow;

