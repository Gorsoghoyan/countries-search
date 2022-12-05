import { FiMenu } from "react-icons/fi";
import useHeader from "../../CustomHook/useHeader";
import NavItem from "./NavItem";
import classnames from "classnames";
import s from "./styles.module.scss";

function Header () {
    const { handleClick, closeNav, navData, active } = useHeader();

    return (
        <header className={s.header}>
            <h1>Countries App</h1>
            <nav className={classnames({ [s.active]: active })}>
                {navData?.map((item, index) => 
                    <NavItem
                        key={index}
                        icon={item.icon}
                        text={item.text}
                        link={item.link}
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