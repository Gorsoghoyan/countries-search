import CountriesFull from "../../Components/CountriesFull";
import useCountries from "../../CustomHook/useCountries";

function Countries () {
    const { onOpenCountryPopup } = useCountries();

    return (
        <CountriesFull 
            type="countries"
            onOpenCountryPopup={onOpenCountryPopup}
        />
    );
}

export default Countries;