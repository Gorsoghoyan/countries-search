import { useEffect, useState } from "react";

const useInfiniteScrolling = ( displaySize, data ) => {  
    const [ scrollingData, setScrollingData ] = useState([]);
    const [ size, setSize ] = useState(displaySize);

    useEffect(() => {
        if (!data) return;
        const handleScroll = () => {
            if (
                document.documentElement.clientHeight + document.documentElement.scrollTop >= 
                document.documentElement.scrollHeight / 1.3
            ) {   
                setSize(prev => {
                    if (data.length < prev + displaySize) {
                        window.removeEventListener("scroll", handleScroll);
                        return data.length;
                    }
                    return prev + displaySize;
                });
            }
        };

        window.addEventListener("scroll", handleScroll);
        
        return () => window.removeEventListener("scroll", handleScroll);
    }, [ data, displaySize ]);

    useEffect(() => {
        if (!data) return;
        if (size) {
            setScrollingData([ ...data.slice(0, size) ]);
        }
    }, [ size, data ]);

    return {
        scrollingData
    }
};

export default useInfiniteScrolling;