
function PopupItem ({ spanText, input, textarea, data, adjective, value, setData }) {

    if (textarea) {
        return (
            <div>
                <span>{spanText}</span>
                <textarea
                    placeholder={textarea.placeholder}
                    value={value}
                    onChange={ e => setData({ ...data, [adjective]: e.target.value }) }
                >
                </textarea>
            </div>
        );
    }

    return (
        <div>
            <span>{spanText}</span>
            <input
                type={input.type}
                placeholder={input.placeholder}
                autoFocus={input.autoFocus}
                value={value}
                onChange={ e => setData({ ...data, [adjective]: e.target.value }) }
            />
        </div>
    );
}

export default PopupItem;