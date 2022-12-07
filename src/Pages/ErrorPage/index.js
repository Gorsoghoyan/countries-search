import GoBack from "../../Components/goBack";
import s from "./styles.module.scss";

function Error () {
    
    return (
        <div className={s.error}>
            <div className={s.textArea}>
                <h2>404</h2>
                <h2>Page not found</h2>
            </div>
            <GoBack />
        </div>
    );
}

export default Error;