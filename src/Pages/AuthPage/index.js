import useAuth from "../../CustomHook/useAuth";
import "./styles.css";

function AuthPage () {
    const { error, inputRef, handleSubmit } = useAuth();

    return (
        <div className="authPage">
            <form onSubmit={handleSubmit}>
                <h2>Sign in</h2>
                {error && <p className="error">{error}</p>}
                <input 
                    type="password"
                    placeholder="Password"
                    ref={inputRef}
                />
                <button>submit</button>
            </form>
            <div className="rightBox"></div>
            <div className="leftBox"></div>
        </div>
    );
}

export default AuthPage;