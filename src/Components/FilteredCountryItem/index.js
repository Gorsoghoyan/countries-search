import s from "./styles.module.scss";

function FilteredCountryItem ({ country, showCountryPopup }) {
    return (
        <div 
            className={s.filteredItem} 
            onClick={() => showCountryPopup(country)}
        >
            <p>{country.name}</p>
        </div>
    );
}

export default FilteredCountryItem;