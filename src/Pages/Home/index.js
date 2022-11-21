import CountriesList from "../../Components/CountriesList";
import CountriesSearch from "../../Components/CountriesSearch";
import "./styles.css";

function Home () {
    return (
        <main className="homePage">
            <CountriesList />
            <CountriesSearch />
        </main>
    );
}

export default Home;