import { Link } from "react-router-dom";
import { GoSignOut } from "react-icons/go";
import { CgProfile } from "react-icons/cg";
import s from "./styles.module.scss";

function NavItem ({ icon, text, link, closeNav }) {

    const handleCloseNav = () => {
        window.innerWidth < 1024 && closeNav();
    };

    if (text === "Settings") {
        return (
            <div 
                className={`${s.navItem} ${s.settings}`} 
                onClick={() => {
                    handleCloseNav();
                }
            }>
                {icon}
                <span>{text}</span>
                <div className={s.settingsDropDown}>
                    <Link to="/profile">
                        <CgProfile />
                        Profile
                    </Link>
                    <p>
                        <GoSignOut />
                        Log out
                    </p>
                </div>
            </div>
        );
    }

    return (
        <Link className={s.navItem} to={link} onClick={handleCloseNav}>
            {icon}
            <span>{text}</span>
        </Link>
    );
}

export default NavItem;