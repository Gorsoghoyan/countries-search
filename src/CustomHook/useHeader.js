import { useSelector } from "react-redux";
import { selectToken } from "../Redux/selections";
import { useEffect, useState } from "react";
import { publicItems, privateItems } from "../Components/Header/navItemsConfig";

const useHeader = () => {
    const [ active, setActive ] = useState(false);
    const [ navItems, setNavItems ] = useState(null);
    const [ isSticky, setIsSticky ] = useState(window.scrollY);
    const token = useSelector(selectToken);

    useEffect(() => {
        if (token) {
            setNavItems(privateItems);
        } else {
            setNavItems(publicItems);
        }
    }, [ token ]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    });

    useEffect(() => {
        if (active) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [ active ]); 
    
    const handleClick = () => {
        setActive(!active);
    };

    const closeNav = () => {
        setActive(false);
    };

    return {
        active,
        navItems,
        isSticky,
        closeNav,
        handleClick,
    };
};

export default useHeader;