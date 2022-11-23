import { useSelector } from "react-redux";
import { selectToken } from "../Redux/selections";
import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
 
const PrivateRoutes = () => {
    const token = useSelector(selectToken);

    return (
        <>
        {token ?
            <>
                <Header />
                <Outlet />
            </> : ""
        }
        </>
    );
};

export default PrivateRoutes;