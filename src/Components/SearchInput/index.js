import s from "./styles.module.scss";

function SearchInput ({ search, setSearch }) {    

    return (
        <input 
            className={s.input}
            type="search"
            placeholder="Search by country name"
            autoFocus={true}
            value={search}
            onChange={e => setSearch(e.target.value)}
        />
    );
}

export default SearchInput;