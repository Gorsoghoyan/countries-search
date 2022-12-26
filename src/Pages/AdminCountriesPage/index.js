import useAdminCountries from "../../CustomHook/useAdminCountries";
import CountriesFull from "../../Components/CountriesFull";
import { AiOutlinePlus } from "react-icons/ai";

function AdminCountries () {
    const { 
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
            btnIcon={<AiOutlinePlus />}
            btnText={"Add country"}
            placeholder={"Search by country name"}
        />
    );
}

export default AdminCountries;