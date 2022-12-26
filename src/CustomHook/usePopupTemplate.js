import { useState } from "react";
import useClickOutSide from "./useClickOutSide";

const usePopupTeplate = ( country, onClose, onSetData, type ) => {
    const [ data, setData ] = useState({
        name: country.name,
        capital: country.capital,
        description: country.description,
        flag: country.flag,
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
        if (type === "Add" && !data.flag) return;

        if (type === "Edit") {
            onSetData(country.id, data);
        } else {
            onSetData(data);
        }

        onClose();
    };  

    const handleChange = (e) => {
        const reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = () => {
            setData({
                ...data,
                flag: reader.result
            });
        };
    };

    return {
        nodeRef,
        data,
        handleSetData,
        handleChange,
        handleSubmit,
    };
};

export default usePopupTeplate;