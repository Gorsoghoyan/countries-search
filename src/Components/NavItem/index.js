import { Link } from "react-router-dom";
import "./styles.css";

function NavItem ({ icon, text, link }) {
    return (
        <Link className="navItem" to={link}>
            <div>{icon}<span>{text}</span></div>
        </Link>
    );
}

export default NavItem;