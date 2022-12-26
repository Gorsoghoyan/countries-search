import { useDispatch, useSelector } from "react-redux";
import { selectSubUsers } from "../Redux/selections";
import { openAddSubUserPopup } from "../Redux/setter";

const useAccounts = () => {
    const subUsers = useSelector(selectSubUsers);
    const dispatch = useDispatch();

    const openSubUserPopup = () => {
        dispatch(openAddSubUserPopup());    
    };
    
    return {
        subUsers,
        openSubUserPopup
    };
};

export default useAccounts;