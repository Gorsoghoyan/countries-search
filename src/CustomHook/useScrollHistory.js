import { useEffect, useRef } from "react";

const useScrollHistory = () => {

    useEffect(() => {
        const handleScroll = () => {
            sessionStorage.setItem(window.location.pathname, document.documentElement.scrollTop);
        };
        window.addEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const scrollPosition = sessionStorage.getItem(window.location.pathname);
        const target = setTimeout(() => {
            document.documentElement.scrollTop = scrollPosition || 0;
        }, 1);

        return () => clearTimeout(target);
    }, []);

};

export default useScrollHistory;