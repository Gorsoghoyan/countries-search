import s from "./styles.module.scss";

function FilteredCountryItem ({ country, openPopup }) {
    return (
        <div 
            className={s.filteredItem} 
            onClick={() => openPopup(country)}
        >
            <p>{country.name}</p>
        </div>
    );
}

export default FilteredCountryItem;