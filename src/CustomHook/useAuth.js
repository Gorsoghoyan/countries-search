import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { users } from "../fakeData/users";
import { userSignIn } from "../Redux/actions";

const useAuth = () => {
    const [ userData, setUserData ] = useState({
        userName: "",
        password: ""
    });
    const [ inputType, setInputType ] = useState("password");
    const [ error, setError ] = useState("");
    const subUsers = JSON.parse(localStorage.getItem("sub-users"));
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleShowPassword = () => {
        if (inputType === "password") {
            setInputType("text");
        } else {
            setInputType("password");
        }
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const { userName, password } = userData;

        if (!userName || !password) {
            setError("Please fill in the inputs");
            return;
        }

        for (let i = 0; i < users.length; i++) {
            const user = users[i];
            if (
                user.password === password && 
                user.userName === userName
            ) {
                setError("");
                dispatch(userSignIn(userData));
                navigate("/admin/countries", { replace: true });
                return;
            }
        }

        if (subUsers?.length) {
            for (let i = 0; i < subUsers.length; i++) {
                const subUser = subUsers[i];
                if (
                    subUser.password === password && 
                    subUser.userName === userName
                ) {
                    setError("");
                    dispatch(userSignIn(subUser));
                    navigate("/admin/countries", { replace: true });
                    return;
                }
            }
        }

        setError("Incorrect password");
    };

    const handleUserData = (name, value) => {
        setUserData({
            ...userData,
            [name]: value
        });
    };

    return {
        error,
        inputType,
        userData,
        handleUserData,
        handleShowPassword,
        handleSubmit
    };
};

export default useAuth;