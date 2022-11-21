import { useDispatch } from "react-redux";
import { getCountries } from "../Redux/Slices/CountriesSlice";

const useApp = () => {
    const dispatch = useDispatch();

    return {
        getCountries,
        dispatch
    };
};  

export default useApp;