import { AiFillEdit } from "react-icons/ai";
import { RiDeleteBinLine } from "react-icons/ri";
import { MdDone } from "react-icons/md";
import s from "./styles.module.scss";

function CountryItem ({ country, onChange, onEdit, onDelete }) {
    return (
        <div className={s.countryItem}>
            <div className={s.imgWrapper}>
                <img src={`https://flagcdn.com/h240/${country.code}.png`} alt="country foto" />
            </div>
            <h2 className={s.countryName}>{country.name}</h2>
            <div className={s.actionsContainer}>
                <label>
                    <span>Select</span>
                    <input 
                        type="checkbox" 
                        checked={country.isChecked}
                        onChange={e => onChange(e, country.id)}
                    />
                </label>
                <div onClick={() => onEdit()}>
                    <span>Edit country</span>
                    <AiFillEdit className={s.edit} />
                </div>
                <div onClick={() => onDelete(country.id)}>
                    <span>Delete country</span>
                    <RiDeleteBinLine className={s.delete} />
                </div>  
            </div>
            <MdDone className={s.done} display={country.isChecked ? "block" : "none"} />
        </div>
    );
}

export default CountryItem;