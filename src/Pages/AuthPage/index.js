import GoBack from "../../Components/goBack";
import useAuth from "../../CustomHook/useAuth";
import s from "./styles.module.scss";

function AuthPage () {
    const { error, inputRef, handleSubmit } = useAuth();

    return (
        <div className={s.authPage}>
            <GoBack />
            <form onSubmit={handleSubmit}>
                <h2>Sign in</h2>
                {error && <p className={s.error}>{error}</p>}
                <input 
                    type="password"
                    placeholder="Password"
                    ref={inputRef}
                />
                <button>submit</button>
            </form>
        </div>
    );
}

export default AuthPage;