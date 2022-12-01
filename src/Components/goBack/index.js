import { SlArrowLeft } from "react-icons/sl";
import { useNavigate } from "react-router-dom";
import s from "./styles.module.scss";

function GoBack () {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(-1);
    };
    
    return (
        <div className={s.goBack} onClick={handleClick}>
            <SlArrowLeft />
        </div>
    );
}

export default GoBack;