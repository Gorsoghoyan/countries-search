import { useSelector } from "react-redux";
import { selectToken } from "../Redux/selections";

const useHeader = () => {
    const token = useSelector(selectToken);

    const handleClick = () => {

    };

    return {
        handleClick,
        token
    };
};

export default useHeader;