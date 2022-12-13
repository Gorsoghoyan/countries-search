import GoBack from "../../Components/goBack";
import useAuth from "../../CustomHook/useAuth";
import InputItem from "./InputItem";
import { inputsConfig } from "./inputsConfig";
import s from "./styles.module.scss";

function Auth () {
    const { error, inputType, userData, handleUserData, handleShowPassword, handleSubmit } = useAuth();

    return (
        <div className={s.authPage}>
            <GoBack />
            <form onSubmit={handleSubmit}>
                <h2>Sign in</h2>
                {error && <p className={s.error}>{error}</p>}
                {inputsConfig.map((input, index) =>
                    <InputItem 
                        key={index}
                        name={input.name}
                        type={input.type}
                        userData={userData}
                        inputType={inputType}
                        autoFocus={input.autoFocus}
                        placeholder={input.placeholder}
                        handleUserData={handleUserData}
                        handleShowPassword={handleShowPassword}
                    />    
                )}
                <button type="submit">submit</button>
            </form>
        </div>
    );
}

export default Auth;