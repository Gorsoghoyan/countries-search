import { AiOutlineClose } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { closeCountryPopup } from "../../../Redux/setter";
import useClickOutSide from "../../../CustomHook/useClickOutSide";
import s from "./styles.module.scss";

function Country ({ country }) {
    const dispatch = useDispatch();

    const onClosePopup = () => {
        dispatch(closeCountryPopup());
    };

    const nodeRef = useClickOutSide(() => {
        dispatch(closeCountryPopup());
    });

    return (
        <div className={s.container} ref={nodeRef}>
            <h2>{country.name}</h2>
            <p>
                <span>The capital of {country.name}:</span>
                {country.capital}
            </p>
            <p>
                <span>Description of {country.name}:</span>
                {country.description}
            </p>
            <AiOutlineClose className={s.close} onClick={onClosePopup} />
        </div>
    );
}

export default Country;