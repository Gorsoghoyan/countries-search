import { GrClose } from "react-icons/gr"
import { AiOutlineUpload } from "react-icons/ai";
import { popupItemsConfig } from "./popupItemsConfig";
import PopupItem from "./PopupItem";
import usePopupTeplate from "../../../CustomHook/usePopupTemplate";
import s from "./styles.module.scss";

const initialCountry = {
    name: "",
    capital: "",
    description: "",
    flag: ""
};

function AddAndEditCountryTemplate ({ country=initialCountry, type, onClose, onSetData, title }) {
    const { nodeRef, data, handleSetData, handleChange, handleSubmit } = usePopupTeplate(
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
            {
                (data.flag || type === "Edit") &&
                <div className={s.flagWrapper}>
                    <img  
                        src={data.flag || `https://flagcdn.com/h240/${country.code}.png`}
                        alt={data.name + " flag"}
                    /> 
                </div>
            }
            <input 
                type="file"
                id="upload_photo"
                onChange={handleChange}
            />
            <label htmlFor="upload_photo" className={s.uploadBtn}>
                <AiOutlineUpload />
                Choose a flag
            </label>
            <button type="submit">{type}</button>
            <GrClose className={s.close} onClick={onClose} />
        </form>
    );
}

export default AddAndEditCountryTemplate;