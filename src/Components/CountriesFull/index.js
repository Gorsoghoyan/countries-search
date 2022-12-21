import SearchInput from "../SearchInput";
import Loading from "../Loading";
import CountryItem from "../CountryItem";
import useCountriesFull from "../../CustomHook/useCountriesFull";
import { AiOutlinePlus } from "react-icons/ai";
import s from "./styles.module.scss";

function CountriesFull ({ onDelete, onChange, handleAddPopup, onOpenCountryPopup, type }) {
    const { 
        isPending,
        scrollingData, 
        search,
        styles,
        handleSearch,
    } = useCountriesFull(type);

    return (
        <section className={s.mainContainer}>
            <div className={s.searchContainer}>
                <div className={s.searchWrapper}>
                    <div className={s.inputContainer} style={styles}>
                        <SearchInput 
                            search={search}
                            setSearch={handleSearch}
                            placeholder={`Search by country name`}
                        />
                        {isPending && <Loading />}
                    </div>
                    {type === "admin" && 
                        <button onClick={handleAddPopup}><AiOutlinePlus />Add country</button>
                    }
                </div>
            </div>
            <div className={s.countriesContainer}>
                {scrollingData?.map(country => 
                    <CountryItem 
                        key={country.id}
                        type={type}
                        country={country}
                        onDelete={onDelete}
                        onChange={onChange}
                        onOpenCountryPopup={onOpenCountryPopup}
                    />    
                )}
            </div>
        </section>
    );
}

export default CountriesFull;