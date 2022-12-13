import { useDispatch, useSelector } from "react-redux";
import { selectAccounts } from "../Redux/selections";
import { openAddSubUserPopup } from "../Redux/setter";

const useAccounts = () => {
    const accounts = useSelector(selectAccounts);
    const dispatch = useDispatch();

    const openSubUserPopup = () => {
        dispatch(openAddSubUserPopup());
    };

    return {
        accounts,
        openSubUserPopup
    };
};

export default useAccounts;