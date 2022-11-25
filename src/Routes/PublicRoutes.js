import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { selectToken } from "../Redux/selections";

const PublicRoutes = () => {
    const token = useSelector(selectToken);
    
    return token ? <Navigate to="404" /> : <Outlet />;
};

export default PublicRoutes;