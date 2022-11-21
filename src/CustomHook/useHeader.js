import { useDispatch, useSelector } from "react-redux";
import { setMenuToggle } from "../Redux/actions";
import { selectMenuToggle } from "../Redux/selections";

const useHeader = () => {
    const menuToggle = useSelector(selectMenuToggle);
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(setMenuToggle(!menuToggle));
    };

    return {
        handleClick
    };
};

export default useHeader;