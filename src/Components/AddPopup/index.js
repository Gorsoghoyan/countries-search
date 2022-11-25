import { useState } from "react";
import { GrClose } from "react-icons/gr";
import s from "./styles.module.scss";

function AddPopup ({ onClose, onAddNewCountry }) {
    const [ addData, setAddData ] = useState({
        name: "",
        capital: "",
        description: ""
    });

    const handleSubmit = (evt) => {
        evt.preventDefault();
        onAddNewCountry(addData);
    };  

    return (
        <div className={s.addPopup}>
            <form onSubmit={handleSubmit}>
                <h2>Add your country</h2>
                <div>
                    <span>Name:</span>
                    <input 
                        type="text" 
                        placeholder="Name"
                        value={addData.name}
                        onChange={e => setAddData({ ...addData, name: e.target.value })}
                    />
                </div>
                <div>
                    <span>The capital of country:</span>
                    <input 
                        type="text"
                        placeholder="name of the capital"
                        value={addData.capital}
                        onChange={e => setAddData({ ...addData, capital: e.target.value })}
                    />
                </div>
                <div>
                    <span>Description of country:</span>
                    <textarea 
                        placeholder={`Write description about country`}
                        value={addData.description}
                        onChange={e => setAddData({ ...addData, description: e.target.value })}
                    >
                    </textarea>
                </div>
                <button type="submit">Add</button>
                <GrClose className={s.close} onClick={onClose} />
            </form>
        </div>
    );
}

export default AddPopup;