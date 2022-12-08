import { FiMenu } from "react-icons/fi";
import useHeader from "../../CustomHook/useHeader";
import NavItem from "./NavItem";
import classnames from "classnames";
import s from "./styles.module.scss";

function Header () {
    const { handleClick, closeNav, navItems, active } = useHeader();

    return (
        <header className={s.header}>
            <h1>Countries App</h1>
            <nav className={classnames({ [s.active]: active })}>
                {navItems?.map((item, index) => 
                    <NavItem 
                        key={index}
                        title={item.title}
                        icon={item.icon}
                        path={item.path}
                        children={item.children}
                        closeNav={closeNav}
                    />      
                )}
            </nav>            
            <FiMenu     
                className={s.menuIcon}
                onClick={handleClick}
            />
        </header>
    );
}

export default Header;