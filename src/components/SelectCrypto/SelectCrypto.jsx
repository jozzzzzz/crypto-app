import CreatableSelect from 'react-select/creatable';

const SelectCrypto = ({ key, allCryptos, cryptoName, changeCryptoName }) => {

    const customStyles = {
        control: (provided) => ({
            ...provided,
            backgroundColor: '#333',
            color: '#fff',
        }),
        singleValue: (provided) => ({
            ...provided,
            color: '#fff',
        }),
        input: (provided) => ({
            ...provided,
            color: '#fff',
        }),
        menu: (provided) => ({
            ...provided,
            backgroundColor: '#333',
        }),
        option: (provided, state) => ({
            ...provided,
            color: state.isFocused ? '#333' : '#fff',
            backgroundColor: state.isFocused ? '#fff' : '#333',
        }),
    };
    
    return (
        <div className="container">
            <div className="select-container">
                <CreatableSelect
                    isClearable
                    onChange={changeCryptoName(key)}
                    options={allCryptos}
                    value={cryptoName}
                    placeholder="Choose your crypto"
                    styles={customStyles}
                />
            </div>
        </div>

    );
};

export default SelectCrypto;