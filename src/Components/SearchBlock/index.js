import { useEffect, useState } from "react";
import Loading from "../Loading";
import SearchInput from "../SearchInput";
import s from "./styles.module.scss";

function SearchBlock ({
    type, search, handleSearch, placeholder,
    handleClick, btnIcon, btnText, isPending
}) {
    const [ styles, setStyles ] = useState(null);

    useEffect(() => {
        if (type === "countries") {
            setStyles({
                borderRadius: "5px",
                width: "100%" 
            });
        }
    }, [ type ]);

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
                {type !== "countries" && 
                    <button onClick={handleClick}>{btnIcon} {btnText}</button>
                }
            </div>
        </div>
    );
}

export default SearchBlock;