import { FiMenu } from "react-icons/fi";
import "./styles.css";

function Header () {
    return (
        <header className="header">
            <h1>Countries App</h1>
            <FiMenu className="menuIcon" />
        </header>
    );
}

export default Header;