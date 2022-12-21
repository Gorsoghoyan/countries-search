import s from "./styles.module.scss";

function SearchInput ({ search, setSearch, placeholder }) {    

    return (
        <input 
            className={s.input}
            type="text"
            placeholder={placeholder}
            autoFocus={true}
            value={search}
            onChange={e => setSearch(e.target.value)}
        />
    );
}

export default SearchInput;