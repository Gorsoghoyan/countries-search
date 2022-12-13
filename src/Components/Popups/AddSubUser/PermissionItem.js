import s from "./styles.module.scss";

function PermissionItem ({ title, name, isChecked, handlePermissions }) {

    const handleChange = (e) => {
        handlePermissions(e.target.name, e.target.checked);
    };

    return (
        <div className={s.permissionItem}>
            <label>
                <input 
                    type="checkbox"
                    name={name || ""}
                    checked={isChecked || false}
                    onChange={handleChange}
                />
                {title}
            </label>
        </div>
    );
}

export default PermissionItem;