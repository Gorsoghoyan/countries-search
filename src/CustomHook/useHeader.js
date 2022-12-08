import { useSelector } from "react-redux";
import { selectToken } from "../Redux/selections";
import { useEffect, useState } from "react";
import { publicItems, privateItems } from "../Components/Header/navItemsConfig";

const useHeader = () => {
    const [ active, setActive ] = useState(false);
    const [ navItems, setNavItems ] = useState(null);
    const token = useSelector(selectToken);

    useEffect(() => {
        if (token) {
            setNavItems(privateItems);
        } else {
            setNavItems(publicItems);
        }
    }, [ token ]);

    const handleClick = () => {
        setActive(!active);
    };

    const closeNav = () => {
        setActive(false);
    };

    return {
        active,
        navItems,
        closeNav,
        handleClick,
    };
};

export default useHeader;