import { FiMenu } from "react-icons/fi";
import useHeader from "../../CustomHook/useHeader";
import NavItem from "../NavItem";
import "./styles.css";

const navConfig = [
    { text: "Dashboard", link: "/countries/admin" },
    { text: "General", link: "/countries/web" },
];

function Header () {
    const { handleClick, token } = useHeader();

    return (
        <header className="header">
            <h1>Countries App</h1>
            <nav className="nav">
                {token ? 
                    navConfig.map((item, index) => 
                        <NavItem
                            key={index}
                            text={item.text}
                            link={item.link}
                        />
                    ) :
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