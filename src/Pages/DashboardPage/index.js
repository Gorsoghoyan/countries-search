import CountriesTable from "../../Components/CountriesTable";
import useDashboard from "../../CustomHook/useDashboard";
import "./styles.css";

function DashboardPage () {
    const { s } = useDashboard();

    return (
        <div className="dashboard">
            <h2 className="title">Countries List</h2> 
            <div className="countriesContaier">
                <CountriesTable />
            </div>
        </div>
    );
}

export default DashboardPage;