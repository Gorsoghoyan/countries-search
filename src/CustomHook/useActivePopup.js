import { useSelector } from "react-redux";
import { selectPopup } from "../Redux/selections";
import useClickOutSide from "./useClickOutSide";

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