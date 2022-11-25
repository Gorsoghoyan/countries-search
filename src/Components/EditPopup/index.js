import { useState } from "react";
import { GrClose } from "react-icons/gr";
import s from "./styles.module.scss";

function EditPopup ({ country, onClose, onEditCountryData }) {
    const [ editData, setEditData ] = useState({
        name: country.name,
        capital: country.capital,
        description: country.description
    });

    const handleSubmit = (evt) => {
        evt.preventDefault();
        onEditCountryData(country.id, editData);
    };  

    return (
        <div className={s.editPopup}>
            <form onSubmit={handleSubmit}>
                <h2>Edit {country.name}'s data</h2>
                <div>
                    <span>Name:</span>
                    <input 
                        type="text" 
                        placeholder="Name"
                        value={editData.name}
                        onChange={e => setEditData({ ...editData, name: e.target.value })}
                    />
                </div>
                <div>
                    <span>The capital of {country.name}:</span>
                    <input 
                        type="text"
                        placeholder="name of the capital"
                        value={editData.capital}
                        onChange={e => setEditData({ ...editData, capital: e.target.value })}
                    />
                </div>
                <div>
                    <span>Description of {country.name}:</span>
                    <textarea 
                        placeholder={`Write description about ${country.name}`}
                        value={editData.description}
                        onChange={e => setEditData({ ...editData, description: e.target.value })}
                    >
                    </textarea>
                </div>
                <button type="submit">Edit</button>
                <GrClose className={s.close} onClick={onClose} />
            </form>
        </div>
    );
}

export default EditPopup;