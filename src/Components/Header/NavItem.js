import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userSignOut } from "../../Redux/actions";
import s from "./styles.module.scss";

function NavItem ({ icon, text, link, closeNav }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleCloseNav = () => {
        window.innerWidth < 1024 && closeNav();
    };

    if (link) {
        return (
            <Link className={s.navItem} to={link} onClick={handleCloseNav}>
                {icon}<span>{text}</span>
            </Link>
        );
    }

    return (
        <div className={s.navItem} onClick={() => {
            dispatch(userSignOut())
            navigate("/admin/countries");
            handleCloseNav();
        }}>
            {icon}
            {text && <span>{text}</span>}
        </div>
    );
}

export default NavItem;