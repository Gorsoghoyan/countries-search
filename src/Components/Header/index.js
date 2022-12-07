import { FiMenu, FiSettings } from "react-icons/fi";
import { navItemsConfig } from "./navItemsConfig";
import useHeader from "../../CustomHook/useHeader";
import NavItem from "./NavItem";
import classnames from "classnames";
import s from "./styles.module.scss";

function Header () {
    const { handleClick, closeNav, token, active } = useHeader();

    return (
        <header className={s.header}>
            <h1>Countries App</h1>
            <nav className={classnames({ [s.active]: active })}>
                {token ? 
                    <>
                    {navItemsConfig.private.map((item, index) => 
                        <NavItem 
                            key={index}
                            text={item.text}
                            icon={item.icon}
                            link={item.link}
                            closeNav={closeNav}
                        />
                    )}
                    <NavItem icon={<FiSettings />} text="Settings" />
                    </> :
                    navItemsConfig.public.map((item, index) => 
                        <NavItem 
                            key={index}
                            text={item.text}
                            icon={item.icon}
                            link={item.link}
                            closeNav={closeNav}
                        />
                    )   
                }
            </nav>            
            <FiMenu     
                className={s.menuIcon}
                onClick={handleClick}
            />
        </header>
    );
}

export default Header;