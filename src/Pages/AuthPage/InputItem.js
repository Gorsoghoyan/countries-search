import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import s from "./styles.module.scss";

function InputItem ({
    name, type, placeholder, autoFocus, 
    inputType, handleShowPassword,
    userData, handleUserData
}) {

    return (
        <div className={s.inputWrapper}>
            <input 
                name={name}
                autoFocus={autoFocus}
                placeholder={placeholder}
                value={userData && userData[name]}
                type={type === "password" ? inputType : type}
                onChange={(e) => handleUserData(e.target.name, e.target.value)}
            />
            {type === "password" &&
                <span className={s.eye} onClick={handleShowPassword}>
                    {inputType === "password" ? <AiFillEyeInvisible /> : <AiFillEye />}
                </span>
            }
        </div>
    );
};

export default InputItem;