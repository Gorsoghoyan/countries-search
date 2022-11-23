import { Outlet } from "react-router-dom";
import Header from "../Components/Header";

const ComponentsRoutes = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
};

export default ComponentsRoutes;