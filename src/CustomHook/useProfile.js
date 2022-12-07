import { useSelector } from "react-redux";
import { selectUserName } from "../Redux/selections";

const useProfile = () => {
    const userName = useSelector(selectUserName);

    return {
        userName,
    };
};

export default useProfile;