import { Outlet } from "react-router-dom";
import Header from "../Components/Header";

const HeaderRoutes = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
};

export default HeaderRoutes;