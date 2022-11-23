import { Navigate } from "react-router-dom";

const RedirectRoute = () => {
    return (false 
        ? <Navigate to="/countries/admin" /> 
        : <Navigate to="/auth" />
    );
};

export default RedirectRoute;