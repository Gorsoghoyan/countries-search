import { GrClose } from "react-icons/gr"
import usePopupTeplate from "../../../CustomHook/usePopupTemplate";
import { popupItemsConfig } from "./popupItemsConfig";
import PopupItem from "./PopupItem";
import s from "./styles.module.scss";

const initialCountry = {
    name: "",
    capital: "",
    description: "",
};

function PopupTemplate ({ country=initialCountry, type, onClose, onSetData, title }) {
    const { nodeRef, data, handleSetData, handleSubmit } = usePopupTeplate(
        country, onClose, onSetData, type
    );
 
    return (
        <form onSubmit={handleSubmit} ref={nodeRef}>
            <h2>{title}</h2>
            {popupItemsConfig.map((item, index) => 
                <PopupItem 
                    key={index}
                    data={data}
                    input={item.input}
                    textarea={item.textarea}
                    adjective={item.adjective}
                    value={data[item.adjective]}
                    setData={handleSetData}
                />    
            )}
            <button type="submit">{type}</button>
            <GrClose className={s.close} onClick={onClose} />
        </form>
    );
}

export default PopupTemplate;