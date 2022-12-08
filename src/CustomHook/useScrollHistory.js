import { useEffect, useRef } from "react";

const useScrollHistory = () => {
    const nodeRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            sessionStorage.setItem(window.location.pathname, nodeRef.current?.scrollTop);
        };
        nodeRef.current.addEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const scrollPosition = sessionStorage.getItem(window.location.pathname);
        setTimeout(() => {
            nodeRef.current.scrollTop = scrollPosition || 0;
        }, 1);
    }, []);

    return nodeRef;
};

export default useScrollHistory;