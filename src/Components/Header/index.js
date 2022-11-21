import { FiMenu } from "react-icons/fi";
import useHeader from "../../CustomHook/useHeader";
import "./styles.css";

function Header () {
    const { handleClick } = useHeader();

    return (
        <header className="header">
            <h1>Countries App</h1>
            <FiMenu     
                className="menuIcon"
                onClick={handleClick}
            />
        </header>
    );
}

export default Header;