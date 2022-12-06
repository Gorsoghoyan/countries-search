import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { users } from "../fakeData/users";
import { userSignIn } from "../Redux/actions";

const useAuth = () => {
    const [ inputType, setInputType ] = useState("password");
    const [ error, setError ] = useState("");
    const inputRef = useRef(null);
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

        if (!inputRef.current.value) {
            setError("Please fill in the input");
            return;
        }

        for (let i = 0; i < users.length; i++) {
            if (users[i].password === inputRef.current.value) {
                setError("");
                dispatch(userSignIn());
                navigate("/web/countries", { replace: true });
                return;
            }
        }

        setError("Incorrect password");
    };

    return {
        error,
        inputRef,
        inputType,
        handleShowPassword,
        handleSubmit
    };
};

export default useAuth;