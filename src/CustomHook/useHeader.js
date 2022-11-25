import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userSignOut } from "../Redux/actions";
import { selectToken } from "../Redux/selections";

const useHeader = () => {
    const token = useSelector(selectToken);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    

    const handleClick = () => {
        
    };

    const onSignOut = () => {
        dispatch(userSignOut());
        navigate("/user/signin", { replace: true });
    };

    return {
        token,
        handleClick,
        onSignOut
    };
};

export default useHeader;