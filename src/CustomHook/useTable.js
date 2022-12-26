import { useDispatch } from "react-redux";
import { deleteSubUser } from "../Redux/actions";

const useTable = () => {
    const dispatch = useDispatch();

    const onDeleteUser = (subUserId) => {
        dispatch(deleteSubUser(subUserId));
    };

    const onEditUser = () => {
    };

    return {
        onDeleteUser,
        onEditUser
    };
};

export default useTable;