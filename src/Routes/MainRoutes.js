import { Route, Routes, Navigate } from "react-router-dom";

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

// const MainRoutes = () => {
//     return (
//         <Routes>
//             <Route index path="/" element={<RedirectRoute />} />

//             <Route path="/" element={<ComponentRoutes />}>
//                 <Route path="admin/countries" element={<DashboardPage />} />
//             </Route>

//             <Route path="/" element={<PublicRoutes />}> 
//                 <Route path="/user/signin" element={<AuthPage />} />
//             </Route>

//             <Route path="/" element={<PrivateRoutes />}> 
//                 <Route path="web/countries" element={<HomePage />} />
//             </Route>

//             <Route path="/" element={<ErrorRoute />}>
//                 <Route path="404" element={<ErrorPage />} />
//                 <Route path="*" element={<Navigate to="404" replace />} />
//             </Route>   
//         </Routes>
//     );
// };

const MainRoutes = () => {
    return (
        <Routes>
            {/* <Route path="/">
                <Route path="countries" element={<Countries />} />
                <Route path="profile" element={<Profile />} />
            </Route>            

            <Route path="/admin">
                <Route path="signin" element={<Auth />} />
                <Route path="countries" element={<AdminCountries />} />
            </Route> */}

            <Route path="/" element={<ComponentRoutes />}>
                <Route path="selected-countries" element={<Countries />} />
            </Route>

            <Route path="/" element={<PrivateRoutes />}>
                <Route path="profile" element={<Profile />} />
                <Route path="all-countries" element={<AdminCountries />} />
            </Route>    
            
            <Route path="/" element={<PublicRoutes />}>
                <Route path="admin/signin" element={<Auth />} />
            </Route>

            <Route path="/" element={<ErrorRoute />}>
                <Route path="404" element={<Error />} />
                <Route path="*" element={<Navigate to="404" replace />} />
            </Route>  
        </Routes>
    );
};

export default MainRoutes;

// Home-part
// /
// /countries
// /profile

// admin-part
// admin/countries-CRUD
// admin/login