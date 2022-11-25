import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userSignIn } from "../Redux/actions";

const useAuth = () => {
    const [ error, setError ] = useState("");
    const inputRef = useRef(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (evt) => {
        evt.preventDefault();
        
        if (!inputRef.current.value) {
            setError("Please fill in the input");
        } else {
            setError("");
            dispatch(userSignIn());
            navigate("/countries/admin", { replace: true });
            inputRef.current.value = "";
        }
    };

    return {
        error,
        inputRef,
        handleSubmit
    };
};

export default useAuth;