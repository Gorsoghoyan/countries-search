import { useSelector } from "react-redux";
import { selectToken } from "../Redux/selections";
import { GoSignOut, GoSignIn } from "react-icons/go";
import { GiEarthAfricaEurope } from "react-icons/gi";
import { MdDashboard } from "react-icons/md";
import { FiSettings } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { useEffect, useState } from "react";

const publicNavConfig = [
    { text: "Countries", icon: <GiEarthAfricaEurope />, link: "/countries" },
    { text: "Sign in", icon: <GoSignIn />, link: "/signin" }
];

const privateNavConfig = [
    { text: "Dashboard", icon: <MdDashboard />, link: "/admin/countries" },
    { text: "Profile", icon: <CgProfile />, link: "/profile" },
    { text: "Sign out", icon: <GoSignOut /> }
];

const useHeader = () => {
    const [ active, setActive ] = useState(false);
    const token = useSelector(selectToken);

    const handleClick = () => {
        setActive(!active);
    };

    const closeNav = () => {
        setActive(false);
    };

    return {
        active,
        token,
        closeNav,
        handleClick,
    };
};

export default useHeader;