import CountryItem from "../CountryItem";
import useCountriesFull from "../../CustomHook/useCountriesFull";
import SearchBlock from "../SearchBlock";
import s from "./styles.module.scss";

function CountriesFull ({
    onDelete, onChange, handleEditPopup, handleAddPopup, onOpenCountryPopup, 
    type, placeholder, btnText, btnIcon, btnIsVisible
}) {
    const { 
        isPending,
        scrollingData, 
        search,
        permissions,
        handleSearch,
    } = useCountriesFull(type);

    return (
        <section className={s.mainContainer}>
            <SearchBlock 
                btnIcon={btnIcon}
                btnText={btnText}
                search={search}
                isPending={isPending}
                btnIsVisible={btnIsVisible}
                placeholder={placeholder}
                handleClick={handleAddPopup}
                handleSearch={handleSearch}
            />
            <div className={s.countriesContainer}>
                {!scrollingData?.length && 
                    <h2 className={s.text}>There is no country</h2>
                }
                {scrollingData?.map(country => 
                    <CountryItem 
                        key={country.id}
                        type={type}
                        country={country}
                        permissions={permissions}
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