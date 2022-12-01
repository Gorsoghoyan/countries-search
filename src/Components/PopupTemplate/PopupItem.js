
function PopupItem ({ input, textarea, data, adjective, value, setData }) {

    if (textarea) {
        return (
            <div>
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