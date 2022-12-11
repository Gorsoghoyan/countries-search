import { useSelector } from "react-redux";
import { selectAccounts } from "../Redux/selections";

const useAccounts = () => {
    const accounts = useSelector(selectAccounts);

    return {
        accounts,
    };
};

export default useAccounts;