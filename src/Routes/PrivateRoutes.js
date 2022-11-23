import { useSelector } from "react-redux";
import { selectToken } from "../Redux/selections";
import { Navigate, Outlet } from "react-router-dom";    
 
const PrivateRoutes = () => {
    const token = useSelector(selectToken);

    return token ? <Outlet /> : <Navigate to="/404" />;
};

export default PrivateRoutes;