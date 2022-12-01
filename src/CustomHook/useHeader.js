import { useSelector } from "react-redux";
import { selectToken } from "../Redux/selections";
import { GoSignOut, GoSignIn } from "react-icons/go";
import { MdDashboard } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";
import { useEffect, useState } from "react";

const publicNavConfig = [
    { text: "Dashboard", icon: <MdDashboard />, link: "/admin/countries" },
    { text: "Sign in", icon: <GoSignIn />, link: "user/signin" }
];

const privateNavConfig = [
    { text: "Dashboard", icon: <MdDashboard />, link: "/admin/countries" },
    { text: "Home", icon: <AiFillHome />, link: "/web/countries" },
    { text: "Sign out", icon: <GoSignOut /> }
];

const useHeader = () => {
    const [ navData, setNavData ] = useState();
    const [ active, setActive ] = useState(false);
    const token = useSelector(selectToken);

    useEffect(() => {
        if (token) {
            setNavData(privateNavConfig);
        } else {
            setNavData(publicNavConfig);
        }
    }, [ token ]);

    const handleClick = () => {
        setActive(!active);
    };

    const closeNav = () => {
        setActive(false);
    };

    return {
        navData,
        active,
        closeNav,
        handleClick,
    };
};

export default useHeader;