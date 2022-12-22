import { GrClose } from "react-icons/gr"
import { AiOutlineUpload } from "react-icons/ai";
import { popupItemsConfig } from "./popupItemsConfig";
import usePopupTeplate from "../../../CustomHook/usePopupTemplate";
import PopupItem from "./PopupItem";
import s from "./styles.module.scss";

const initialCountry = {
    name: "",
    capital: "",
    description: "",
};

function AddAndEditCountryTemplate ({ country=initialCountry, type, onClose, onSetData, title }) {
    const { nodeRef, data, handleSetData, handleSubmit } = usePopupTeplate(
        country, onClose, onSetData, type
    );
 
    return (
        <form className={s.form} onSubmit={handleSubmit} ref={nodeRef}>
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
            <input 
                type="file"
                AiOutlineUpload{        id="upload_photo"
            />
            <label htmlFor="upload_photo" className={s.uploadPhoto}>
                <AiOutlineUpload />
                Choose a photo
            </label>
            <button type="submit">{type}</button>
            <GrClose className={s.close} onClick={onClose} />
        </form>
    );
}

export default AddAndEditCountryTemplate;