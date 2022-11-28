import { FiMenu } from "react-icons/fi";
import { GoSignOut } from "react-icons/go";
import { MdDashboard, MdWebStories } from "react-icons/md";
import useHeader from "../../CustomHook/useHeader";
import NavItem from "../NavItem";
import "./styles.css";

const navConfig = [
    { text: "Dashboard", icon: <MdDashboard />, link: "/admin/countries" },
    { text: "General", icon: <MdWebStories />, link: "/web/countries" },
];

function Header () {
    const { handleClick, onSignOut, token } = useHeader();

    return (
        <header className="header">
            <h1>Countries App</h1>
            <nav className="nav">
                {token ? 
                    <>
                        {navConfig.map((item, index) => 
                            <NavItem
                                key={index}
                                icon={item.icon}
                                text={item.text}
                                link={item.link}
                            />
                        )}
                        <GoSignOut onClick={onSignOut} />
                    </> :
                    <NavItem text="Sign in" link="/user/signin" />
                }
            </nav>            
            <FiMenu     
                className="menuIcon"
                onClick={handleClick}
            />
        </header>
    );
}

export default Header;