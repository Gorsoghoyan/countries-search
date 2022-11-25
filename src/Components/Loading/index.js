import s from "./styles.module.scss";

function Loading () {
    return (
        <div className={s["lds-ring"]}><div></div><div></div><div></div><div></div></div>
    );
}

export default Loading;