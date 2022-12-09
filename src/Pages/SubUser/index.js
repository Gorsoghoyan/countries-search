import useSubUser from "../../CustomHook/userSubUser";
import { inputsConfig } from "./inputsConfig";
import s from "./styles.module.scss";

function SubUser () {
    const { handleUserData, handleSubmit, userData } = useSubUser();
    
    return (
        <section className={s.subUser}>
            <form autoComplete="off" onSubmit={handleSubmit}>
                <h2>Add user</h2>
                {inputsConfig.map((item, index) => 
                    <input 
                        key={index}
                        type={item.type}
                        name={item.name}
                        autoFocus={item.autoFocus}
                        placeholder={item.placeholder}
                        value={userData && userData[item.name]}
                        onChange={(e) => handleUserData(e.target.name, e.target.value)}
                    />
                )}
                <button>Add</button>
            </form>
        </section>
    );
}

export default SubUser;