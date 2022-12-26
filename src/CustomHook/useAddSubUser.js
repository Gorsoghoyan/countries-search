import { useState } from "react";
import { useDispatch } from "react-redux";
import { permissionsConfig } from "../Components/Popups/AddSubUser/permissionsConfig";
import { users } from "../fakeData/users";
import { addNewSubUser } from "../Redux/actions";
import { closeAddSubUserPopup } from "../Redux/setter";
import useClickOutSide from "./useClickOutSide";

const useAddSubUser = () => {
    const dispatch = useDispatch();
    const [ error, setError ] = useState("");
    const [ inputType, setInputType ] = useState("password");

    const [ permissions, setPermissions ] = useState(permissionsConfig);

    const [ userData, setUserData ] = useState({
        userName: "",
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
        const subUsers = JSON.parse(localStorage.getItem("sub-users")) || false;
        const { userName, password } = userData;

        if (!userName || !password) {
            setError("Please fill in the inputs");
            return;
        }

        for (let i = 0; i < users.length; i++) {
            const user = users[i];
            if (
                user.password === password ||
                user.userName === userName 
            ) {
                setError("Please try another one");
                return;
            }
        }

        if (subUsers.length) {
            for (let i = 0; i < subUsers.length; i++) {
                const subUser = subUsers[i];
                if (
                    subUser.password === password || 
                    subUser.userName === userName
                ) {
                    setError("Please try another one");
                    return;
                }
            }
        }

        dispatch(closeAddSubUserPopup());

        const permissionsObj = permissions.reduce((aggr, item) => {
            aggr[item.name] = item.isChecked;
            return aggr;
        }, {});

        dispatch(addNewSubUser({
            permissions: permissionsObj,
            data: userData
        }));
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