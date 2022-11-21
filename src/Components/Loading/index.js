import "./styles.css";

function Loading ({ className }) {
    return (
        <div className={`lds-ring ${className}`}><div></div><div></div><div></div><div></div></div>
    );
}

export default Loading;