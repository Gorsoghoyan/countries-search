import { useSelector } from "react-redux";
import { selectPopup } from "../Redux/selections";

const useActivePopup = () => {
    const { addPopup, editPopup, countryPopup, activePopup } = useSelector(selectPopup); 

    return {
        addPopup,
        editPopup,
        countryPopup,
        activePopup,
    };
};

export default useActivePopup;