import { useEffect, useState } from "react";

const useSubUser = () => {
    const [ userData, setUserData ] = useState({
        firstName: "",
        lastName: "",
        email: ""
    });

    const handleUserData = (name, value) => {
        setUserData({
            ...userData,
            [name]: value
        });
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        setUserData({
            firstName: "",
            lastName: "",
            email: ""
        });
    };

    return {
        handleUserData,
        handleSubmit,
        userData
    };
}

export default useSubUser;