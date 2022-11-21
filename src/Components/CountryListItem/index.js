import "./styles.css";

function CountryListItem ({ id, name, checked, handleChangeCheckbox }) {

    return ( 
        <label className="countryListItem">
            <p>{name}</p>
            <input 
                type="checkbox" 
                checked={checked} 
                onChange={e => handleChangeCheckbox(e, id)}
            />
        </label>
    );
}

export default CountryListItem;