import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { IoIosArrowUp } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { userSignOut } from "../../Redux/actions";
import { selectUserName } from "../../Redux/selections";
import useClickOutSide from "../../CustomHook/useClickOutSide";
import s from "./styles.module.scss";
import c from "classnames";

function NavItem ({ title, icon, path, children, closeNav }) {
    const [ openChildren, setOpenChildren ] = useState(false);
    const nodeRef = useClickOutSide(() => setOpenChildren(false));
    const userName = useSelector(selectUserName);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleCloseNav = () => {
        window.innerWidth < 1024 && closeNav();
    };

    const handleSignOut = () => {
        dispatch(userSignOut());
        navigate("/");
    };  

    if (!children) {
        return (
            <Link to={path} className={s.navItem} onClick={handleCloseNav}>
                {icon}
                <span>{title}</span>  
            </Link>
        );
    }

    return (
        <div ref={nodeRef} className={s.navItem} onClick={() => {
            setOpenChildren(!openChildren);
        }}>
            {icon}
            <span>{title}</span>
            <IoIosArrowUp className={c(s.arrowTop, { [s.active]: openChildren })} />
            {children &&
                <div className={c(s.children, { [s.active]: openChildren })}>
                {
                    title === "Settings" &&
                    <div className={s.profile} onClick={(e) => {
                        e.stopPropagation();
                    }}>
                        <CgProfile />
                        <p>{userName}</p>
                    </div>
                }
                {children.map((item, index) => 
                    item.type === "signout" ?
                    <div
                        key={index} 
                        className={s.childItem} 
                        onClick={handleSignOut}
                    >
                        {item.icon}
                        <span>{item.title}</span>
                    </div> :
                    <Link 
                        key={index} 
                        className={s.childItem} 
                        to={item.path} 
                        onClick={handleCloseNav}
                    >
                        {item.icon}
                        <span>{item.title}</span>
                    </Link>
                )}
                </div>
            }
        </div>
    );
}

export default NavItem;