import { useState } from "react";
import { GrClose } from "react-icons/gr"
import useClickOutSide from "../../CustomHook/useClickOutSide";
import s from "./styles.module.scss";

function Popup ({ onClose, onSetData, id, name="", capital="", description="", btnText, title }) {
    const [ data, setData ] = useState({
        name,
        capital,
        description
    });

    const nodeRef = useClickOutSide(() => {
        onClose();
    });

    const handleSubmit = (evt) => {
        evt.preventDefault();

        if (!data.name && !data.capital && !data.description) {
            return;
        }

        if (id) {
            onSetData(id, data);
        } else {
            onSetData(data);
        }
    };  
 
    return (
        <div className={s.popup}>
            <form onSubmit={handleSubmit} ref={nodeRef}>
                <h2>{title}</h2>
                <div>
                    <span>Name:</span>
                    <input 
                        type="text" 
                        placeholder="Name"
                        autoFocus={true}
                        value={data.name}
                        onChange={e => setData({ ...data, name: e.target.value })}
                    />
                </div>
                <div>
                    <span>The capital of the country:</span>
                    <input 
                        type="text"
                        placeholder="name of the capital"
                        value={data.capital}
                        onChange={e => setData({ ...data, capital: e.target.value })}
                    />
                </div>
                <div>
                    <span>Description of the country:</span>
                    <textarea 
                        placeholder={`Write description about country`}
                        value={data.description}
                        onChange={e => setData({ ...data, description: e.target.value })}
                    >
                    </textarea>
                </div>
                <button type="submit">{btnText}</button>
                <GrClose className={s.close} onClick={onClose} />
            </form>
        </div>
    );
}

export default Popup;