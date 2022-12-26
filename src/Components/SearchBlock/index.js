import { useEffect, useState } from "react";
import Loading from "../Loading";
import SearchInput from "../SearchInput";
import s from "./styles.module.scss";

function SearchBlock ({
    search, handleSearch, placeholder, btnIsVisible,
    handleClick, btnIcon, btnText, isPending
}) {
    const [ styles, setStyles ] = useState(null);

    useEffect(() => {
        if (!btnIsVisible) {
            setStyles({
                borderRadius: "5px",
                width: "100%" 
            });
        }
    }, [ btnIsVisible ]);

    return (
        <div className={s.container}>
            <div className={s.searchWrapper}>
                <div className={s.inputContainer} style={styles}>
                    <SearchInput 
                        search={search}
                        setSearch={handleSearch}
                        placeholder={placeholder}
                    />
                    {isPending && <Loading />}
                </div>
                {btnIsVisible &&
                    <button onClick={handleClick}>{btnIcon} {btnText}</button>
                }
            </div>
        </div>
    );
}

export default SearchBlock;