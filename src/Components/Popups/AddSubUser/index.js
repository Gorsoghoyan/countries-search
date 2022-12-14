import useAddSubUser from "../../../CustomHook/useAddSubUser";
import PermissionItem from "./PermissionItem";
import InputItem from "./InputItem";
import { inputsConfig } from "./inputsConfig";
import { GrClose } from "react-icons/gr";
import s from "./styles.module.scss";

function AddSubUser () {
    const { 
        userData, inputType, nodeRef, permissions, error,
        onClose, handleUserData, handleShowPassword, handleSubmit, handlePermissions
    } = useAddSubUser();

    return (
        <form className={s.form} autoComplete="off" onSubmit={handleSubmit} ref={nodeRef}>
            <h2>Create sub-user</h2>
            {error && <p className={s.error}>{error}</p>}
            {inputsConfig.map((input, index) => 
                <InputItem 
                    className={s.inputWrapper}
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
            <GrClose className={s.close} onClick={onClose} />
            <h3>Permissions</h3>
            {permissions && permissions.map((item, index) => 
                <PermissionItem 
                    key={index}
                    title={item.title}
                    name={item.name}
                    isChecked={item.isChecked}
                    handlePermissions={handlePermissions}
                />
            )}
            <button className={s.save}>Save</button>
        </form>     
    );
}

export default AddSubUser;