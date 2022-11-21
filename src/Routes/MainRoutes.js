import { useRoutes } from "react-router-dom";
import Country from "../Pages/Country";
import Home from "../Pages/Home";

export const MainRoutes = () => {
    return useRoutes([
        {path: "/", element: <Home />},
        {path: "/country/:id", element: <Country />}
    ]);
};