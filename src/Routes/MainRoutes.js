import { Route, Routes } from "react-router-dom";

import Auth from "../Pages/AuthPage";
import Error from "../Pages/ErrorPage";
import Profile from "../Pages/ProfilePage";
import Countries from "../Pages/CountriesPage";
import AdminCountries from "../Pages/AdminCountriesPage";

import ErrorRoute from "./ErrorRoute";
import PublicRoutes from "./PublicRoutes";
import RedirectRoute from "./RedirectRout";
import PrivateRoutes from "./PrivateRoutes";
import ComponentRoutes from "./ComponentRoutes";

const MainRoutes = () => {
    return (
        <Routes>
            <Route index path="/" element={<RedirectRoute />} />

            <Route path="/" element={<ComponentRoutes />}>
            </Route>
            
            <Route path="/" element={<PrivateRoutes />}>
                <Route path="profile" element={<Profile />} />
                <Route path="admin/countries" element={<AdminCountries />} />
            </Route>    
            
            <Route path="/" element={<PublicRoutes />}>
                <Route path="signin" element={<Auth />} />
                <Route path="/countries" element={<Countries />} />
            </Route>

            <Route path="/" element={<ErrorRoute />}>
                <Route path="*" element={<Error />} />
            </Route>  
        </Routes>
    );
};

export default MainRoutes;