import { useState } from "react";
import { useDispatch } from "react-redux";
import { permissionsConfig } from "../Components/Popups/AddSubUser/permissionsConfig";
import { users } from "../fakeData/users";
import { closeAddSubUserPopup } from "../Redux/setter";
import useClickOutSide from "./useClickOutSide";

const useAddSubUser = () => {
    const dispatch = useDispatch();
    const [ error, setError ] = useState("");
    const [ inputType, setInputType ] = useState("password");

    const [ permissions, setPermissions ] = useState(permissionsConfig);

    const [ userData, setUserData ] = useState({
        userName: "",
        email: "",
        password: ""
    });

    const handleUserData = (name, value) => {
        setUserData({
            ...userData,
            [name]: value
        });
    };

    const handlePermissions = (name, toggle) => {
        setPermissions(permissions.map(item => {
            if (item.name === name) {
                return {
                    ...item,
                    isChecked: toggle
                }
            }
            return item;
        }));
    };

    const handleShowPassword = () => {
        if (inputType === "password") {
            setInputType("text");
        } else {
            setInputType("password");
        }
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const subUsers = localStorage.getItem("sub-users");
        const accounts = subUsers && JSON.stringify(subUsers).accounts;
        const { userName, email, password } = userData;

        if (!userName || !email || !password) {
            setError("Please fill in the inputs");
            return;
        }

        for (let i = 0; i < users.length; i++) {
            const user = users[i];
            if (
                user.password === password && 
                user.email === email && 
                user.userName === userName
            ) {
                setError("Such an account already exist");
                return;
            }
        }

        if (accounts) {
            for (let i = 0; i < accounts.length; i++) {
                const account = accounts[i];
                if (
                    account.password === password && 
                    account.email === email && 
                    account.userName === userName
                ) {
                    setError("Such an account already exist");
                    return;
                }
            }
        }

        
    };

    const onClose = () => {
        dispatch(closeAddSubUserPopup());
    };

    const nodeRef = useClickOutSide(() => {
        dispatch(closeAddSubUserPopup());
    });

    return {
        error,
        inputType,
        userData,
        nodeRef,
        permissions,
        onClose,
        handleUserData,
        handleShowPassword,
        handleSubmit,
        handlePermissions
    };
};

export default useAddSubUser;