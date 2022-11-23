import { Link } from "react-router-dom";
import "./styles.css";

function NavItem ({ text, link }) {
    return (
        <Link className="navItem" to={link}>{text}</Link>
    );
}

export default NavItem;