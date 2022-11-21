import Loading from "../Loading";
import "./styles.css";

function Input ({ search, setSearch, isPending }) {

    return (
        <div className="inputContainer">
            <input 
                type="search"
                className="searchInput"
                placeholder="Search by country name"
                value={search}
                onChange={e => setSearch(e.target.value)}
            />
            {isPending && <Loading className="inputLoading" />}
        </div>
    );
}

export default Input;