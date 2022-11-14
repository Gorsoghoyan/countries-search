
function SearchInput ({ handleSearch }) {

    return (
        <input
            className="searchInput"
            type="search"
            placeholder="Write country's name"
            onChange={(e) => handleSearch(e.target.value)}
        />
    );
}

export default SearchInput;