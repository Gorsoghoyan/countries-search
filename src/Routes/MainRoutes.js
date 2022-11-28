import { Route, Routes, BrowserRouter as Router, Navigate } from "react-router-dom";

import AuthPage from "../Pages/AuthPage";
import MainPage from "../Pages/MainPage";
import ErrorPage from "../Pages/ErrorPage";
import CountryPage from "../Pages/CountryPage";
import DashboardPage from "../Pages/DashboardPage";

import ErrorRoute from "./ErrorRoute";
import PublicRoutes from "./PublicRoutes";
import RedirectRoute from "./RedirectRout";
import PrivateRoutes from "./PrivateRoutes";
import HeaderRoutes from "./HeaderRoutes";

const MainRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route index path="/" element={<RedirectRoute />} />

                <Route path="/" element={<PublicRoutes />}> 
                    <Route path="/user/signin" element={<AuthPage />} />
                </Route>

                <Route path="/" element={<HeaderRoutes />}>
                    <Route path="/" element={<PrivateRoutes />}> 
                        <Route path="web/countries" element={<MainPage />} />
                        <Route path="admin/countries" element={<DashboardPage />} />
                        <Route path="country/:id" element={<CountryPage />} />
                    </Route>

                    <Route path="/" element={<ErrorRoute />}>
                        <Route path="404" element={<ErrorPage />} />
                        <Route path="*" element={<Navigate to="404" />} />
                    </Route>   
                </Route> 
            </Routes>
        </Router>
    );
};

export default MainRoutes;