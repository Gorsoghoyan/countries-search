import GoBack from "../../Components/goBack";
import useAuth from "../../CustomHook/useAuth";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import s from "./styles.module.scss";

function Auth () {
    const { error, inputRef, inputType, handleShowPassword, handleSubmit } = useAuth();

    return (
        <div className={s.authPage}>
            <GoBack />
            <form onSubmit={handleSubmit}>
                <h2>Sign in</h2>
                {error && <p className={s.error}>{error}</p>}
                <div className={s.inputContainer}>
                    <input 
                        type={inputType}
                        placeholder="Password"
                        autoFocus={true}
                        ref={inputRef}
                    />
                    <span className={s.eye} onClick={handleShowPassword}>
                        {inputType === "password" ? <AiFillEyeInvisible /> : <AiFillEye />}
                    </span>
                </div>
                <button type="submit">submit</button>
            </form>
        </div>
    );
}

export default Auth;