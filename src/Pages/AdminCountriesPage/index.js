import useAdminCountries from "../../CustomHook/useAdminCountries";
import CountriesFull from "../../Components/CountriesFull";
import { AiOutlinePlus } from "react-icons/ai";

function AdminCountries () {
    const { 
        permissions,
        onChange, 
        onDelete, 
        handleAddPopup ,
        handleEditPopup, 
    } = useAdminCountries();

    return (
        <CountriesFull 
            type="admin"
            onDelete={onDelete}
            onChange={onChange}
            handleAddPopup={handleAddPopup}
            handleEditPopup={handleEditPopup}
            btnIsVisible={!permissions ? true : permissions.add ? true : false}
            btnIcon={<AiOutlinePlus />}
            btnText={"Add country"}
            placeholder={"Search by country name"}
        />
    );
}

export default AdminCountries;