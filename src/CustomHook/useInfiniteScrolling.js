import { useEffect, useRef, useState } from "react";

const useInfiniteScrolling = (sizeNum, scrollingData) => {
    const [ data, setData ] = useState([]);
    const [ number, setNumber ] = useState(sizeNum);
    const currentRef = useRef(null);

    useEffect(() => {
    const handleScroll = () => {
        if (
        document.documentElement.clientHeight + document.documentElement.scrollTop >= 
        document.documentElement.scrollHeight / 1.3
        ) {   
        setNumber(prev => {
            if (scrollingData.length < prev + sizeNum) {
            currentRef.current?.removeEventListener("scroll", handleScroll);
            return scrollingData.length;
            }
            return prev + sizeNum;
        });
        }
    };

    currentRef.current?.addEventListener("scroll", handleScroll);
    
    // return () => currentRef.current?.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (number) {
            setData([ ...scrollingData.slice(0, number) ]);
        }
    }, [ number ]);

    return {
        data, 
        currentRef
    }
};

export default useInfiniteScrolling;