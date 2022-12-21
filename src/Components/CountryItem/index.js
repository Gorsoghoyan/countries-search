import { AiFillEdit } from "react-icons/ai";
import { RiDeleteBinLine } from "react-icons/ri";
import { MdDone } from "react-icons/md";
import { useInView } from "react-intersection-observer";
import s from "./styles.module.scss";

function CountryItem ({ country, onChange, onEdit, onDelete }) {
    const { ref, inView } = useInView({
        threshold: 0.5,
        triggerOnce: true
    });
    
    return (
        <div className={s.countryItem}>
            <div className={s.imgWrapper}>
                <img 
                    src={`https://flagcdn.com/${inView ? "h240" : "h20"}/${country.code}.png`} 
                    alt="country foto" 
                    ref={ref}    
                />
            </div>
            <h2 className={s.countryName}>{country.name}</h2>
            <div className={s.actionsContainer}>
                <div onClick={() => onDelete(country.id)}>
                    <RiDeleteBinLine className={s.delete} />
                </div>  
                <div onClick={() => onEdit()}>
                    <AiFillEdit className={s.edit} />
                </div>
                <label>
                    <input 
                        type="checkbox" 
                        checked={country.isChecked}
                        onChange={e => onChange(e, country.id)}
                    />
                </label>
            </div>
            <MdDone className={s.done} display={country.isChecked ? "block" : "none"} />
        </div>
    );
}

export default CountryItem;