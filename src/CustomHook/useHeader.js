import { useState } from "react";
import { useSelector } from "react-redux";
import { selectToken } from "../Redux/selections";

const useHeader = () => {
    const token = useSelector(selectToken);

    const handleClick = () => {
        
    };

    return {
        token,
        handleClick,
    };
};

export default useHeader;