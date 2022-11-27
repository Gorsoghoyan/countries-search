import { useState } from "react";
import useClickOutSide from "./useClickOutSide";

const usePopupTeplate = ( country, onClose, onSetData, type ) => {
    const [ data, setData ] = useState({
        name: country.name,
        capital: country.capital,
        description: country.description
    });

    const nodeRef = useClickOutSide(() => {
        onClose();
    });

    const handleSetData = (changedData) => {
        setData(changedData);
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        if (!data.name) return;

        if (type === "Edit") {
            onSetData(country.id, data);
        } else {
            onSetData(data);
        }

        onClose();
    };  

    return {
        nodeRef,
        data,
        handleSetData,
        handleSubmit,
    };
};

export default usePopupTeplate;