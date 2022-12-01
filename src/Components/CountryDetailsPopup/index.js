import { AiOutlineClose } from "react-icons/ai";
import useClickOutSide from "../../CustomHook/useClickOutSide";
import s from "./styles.module.scss";

function CountryDetailsPopup ({ country, closeCountryPopup }) {
    const nodeRef = useClickOutSide(() => {
        closeCountryPopup()
    }); 

    return (
        <div className={s.popup}>
            <div className={s.detailsContainer} ref={nodeRef}>
                <h2>{country.name}</h2>
                <p>
                    <span>The capital of {country.name}:</span>
                    {country.capital}
                </p>
                <p>
                    <span>Description of {country.name}:</span>
                    {country.description}
                </p>
                <AiOutlineClose className={s.close} onClick={closeCountryPopup} />
            </div>
        </div>
    );
}

export default CountryDetailsPopup;