import { useDispatch } from "react-redux";
import { openCountryPopup } from "../Redux/setter";

const useCountries = () => {
    const dispatch = useDispatch();

    const onOpenCountryPopup = (country) => {
        dispatch(openCountryPopup(country));
    };

    return {
        onOpenCountryPopup
    };
};

export default useCountries;