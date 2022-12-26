import CountryItem from "../CountryItem";
import useCountriesFull from "../../CustomHook/useCountriesFull";
import SearchBlock from "../SearchBlock";
import s from "./styles.module.scss";

function CountriesFull ({
    onDelete, onChange, handleEditPopup, handleAddPopup,
    onOpenCountryPopup, type, placeholder, btnText, btnIcon
}) {
    const { 
        isPending,
        scrollingData, 
        search,
        handleSearch,
    } = useCountriesFull(type);

    return (
        <section className={s.mainContainer}>
            <SearchBlock 
                type={type}
                search={search}
                btnIcon={btnIcon}
                btnText={btnText}
                isPending={isPending}
                placeholder={placeholder}
                handleClick={handleAddPopup}
                handleSearch={handleSearch}
            />
            <div className={s.countriesContainer}>
                {scrollingData?.map(country => 
                    <CountryItem 
                        key={country.id}
                        type={type}
                        country={country}
                        onDelete={onDelete}
                        onChange={onChange}
                        handleEditPopup={handleEditPopup}
                        onOpenCountryPopup={onOpenCountryPopup}
                    />    
                )}
            </div>
        </section>
    );
}

export default CountriesFull;