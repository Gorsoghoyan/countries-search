import useAdminCountries from "../../CustomHook/useAdminCountries";
import CountriesFull from "../../Components/CountriesFull";

function AdminCountries () {
    const { 
        onEdit, 
        onChange, 
        onDelete, 
        handleAddPopup 
    } = useAdminCountries();

    return (
        <CountriesFull 
            type="admin"
            onDelete={onDelete}
            onChange={onChange}
            handleAddPopup={handleAddPopup}
        />
    );
}

export default AdminCountries;