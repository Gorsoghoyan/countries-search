import { Outlet } from "react-router-dom";
import Header from "../Components/Header";

const ErrorRoute = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
};

export default ErrorRoute;