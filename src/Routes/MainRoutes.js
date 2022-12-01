import { Route, Routes, Navigate } from "react-router-dom";

import AuthPage from "../Pages/AuthPage";
import HomePage from "../Pages/HomePage";
import ErrorPage from "../Pages/ErrorPage";
import CountryPage from "../Pages/CountryPage";
import DashboardPage from "../Pages/DashboardPage";

import ErrorRoute from "./ErrorRoute";
import PublicRoutes from "./PublicRoutes";
import RedirectRoute from "./RedirectRout";
import PrivateRoutes from "./PrivateRoutes";
import HeaderRoutes from "./HeaderRoutes";
import ComponentRoutes from "./ComponentRoutes";

const MainRoutes = () => {
    return (
        <Routes>
            <Route index path="/" element={<RedirectRoute />} />

            <Route path="/" element={<ComponentRoutes />}>
                <Route path="admin/countries" element={<DashboardPage />} />
            </Route>

            <Route path="/" element={<PublicRoutes />}> 
                <Route path="/user/signin" element={<AuthPage />} />
            </Route>

            <Route path="/" element={<PrivateRoutes />}> 
                <Route path="web/countries" element={<HomePage />} />
            </Route>

            <Route path="/" element={<ErrorRoute />}>
                <Route path="404" element={<ErrorPage />} />
                <Route path="*" element={<Navigate to="404" replace />} />
            </Route>   
        </Routes>
    );
};

export default MainRoutes;