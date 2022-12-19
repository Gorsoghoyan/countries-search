import { useSelector } from "react-redux";
import { selectToken } from "../Redux/selections";
import { useEffect, useState } from "react";
import { publicItems, privateItems } from "../Components/Header/navItemsConfig";

const useHeader = () => {
    const [ active, setActive ] = useState(false);
    const [ navItems, setNavItems ] = useState(null);
    const [ isSticky, setIsSticky ] = useState(false);
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

    useEffect(() => {
        const handleScroll = () => {
            console.log('scroll')
            window.scrollY >= 150 ? setIsSticky(true) : setIsSticky(false);
        };

        window.addEventListener("scroll", handleScroll);

        return window.removeEventListener("scroll", handleScroll);
    }, []);

    return {
        active,
        navItems,
        isSticky,
        closeNav,
        handleClick,
    };
};

export default useHeader;