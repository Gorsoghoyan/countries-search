import React, { useRef, useEffect } from "react";

const useClickOutSide = (callback) => {
    const currentRef = useRef(null);

    useEffect(() => {

        function handleClickOutside(event) {
          if (currentRef.current && !currentRef.current.contains(event.target)) {
            callback();
          }
        }

        document.addEventListener("mousedown", handleClickOutside);
        
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
    });

    return currentRef;
};

export default useClickOutSide;