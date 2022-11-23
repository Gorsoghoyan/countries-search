import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectToken } from "../Redux/selections";

const RedirectRoute = () => {
    const token = useSelector(selectToken);

    return (token 
        ? <Navigate to="/countries/admin" /> 
        : <Navigate to="/auth" />
    );
};

export default RedirectRoute;