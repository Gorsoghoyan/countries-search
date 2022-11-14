import CountriesList from "./components/countriesList/CountriesList";
import FilteredCountries from "./components/filteredCountries/FilteredCountries";
import SearchInput from "./components/searchInput/SearchInput";
import "./components/style.css";
import useApp from "./customHooks/useApp";

function App () {
  const { isPending, filteredCountries, handleSearch } = useApp();

  return (
    <div className="app">
      <CountriesList />
      <SearchInput handleSearch={handleSearch} />
      <FilteredCountries 
        isPending={isPending}
        filteredCountries={filteredCountries}
      />
    </div>
  );
}

export default App;
