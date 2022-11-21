import useList from '../../CustomHook/useList';
import CountryListItem from '../CountryListItem';
import './styles.css';

function CountriesList () {
    const { countriesData, handleChangeCheckbox } = useList();

    return (
        <div className="countriesList">
            <h2>Countries List</h2>
            <div className="listBox">
                {countriesData?.map(country => 
                    <CountryListItem
                        key={country.id}
                        id={country.id}
                        name={country.name}
                        checked={country.checked}
                        handleChangeCheckbox={handleChangeCheckbox}
                    />
                )}
            </div>
        </div>
    );
}

export default CountriesList;