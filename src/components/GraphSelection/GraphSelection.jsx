import React, { useState } from 'react';
import CreatableSelect from 'react-select/creatable';
import Chart from '../Chart/Chart.jsx';
import CryptoDisplay from '../../callAPI/CryptoList.js';
import './GraphSelection.css';

function GraphSelection() {
    const [currentCrypto, setCurrentCrypto] = useState({ value: 'BNBUSDT', label: 'BNB' });
    const [secondCrypto, setSecondCrypto] = useState({ value: 'LTCUSDT', label: 'LTC' });
    const [compareMode, setCompareMode] = useState(false);

    const allCryptos = CryptoDisplay().map(crypto => ({ value: crypto.symbol, label: crypto.symbol.replace("USDT", "") }));

    const handleCryptoChange = (selectedOption) => {
        if (selectedOption) {
            setCurrentCrypto(selectedOption);
        } else {
            setCurrentCrypto({ value: 'BNBUSDT', label: 'BNB' });
        }
    };

    const handleSecondCryptoChange = (selectedOption) => {
        setSecondCrypto(selectedOption);
    };

    const toggleCompareMode = () => {
        setCompareMode(!compareMode);
    };

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
        <div>
            <div className="container">
                <div className="select-container">
                    <CreatableSelect
                        isClearable
                        onChange={handleCryptoChange}
                        options={allCryptos}
                        value={currentCrypto}
                        placeholder="Choose your crypto"
                        styles={customStyles}
                    />
                </div>

                {compareMode && (
                    <div className="select-container">
                        <CreatableSelect
                            isClearable
                            onChange={handleSecondCryptoChange}
                            options={allCryptos}
                            value={secondCrypto}
                            placeholder="Choose your crypto"
                            styles={customStyles}
                        />
                    </div>
                )}
            </div>

            <button onClick={toggleCompareMode} className={compareMode ? 'remove-button' : 'compare-button'}>
                {compareMode ? 'Remove comparison' : 'Compare crypto'}
            </button>

            <div className="show-crypto">
                <span className="crypto blue">{currentCrypto ? currentCrypto.label : 'Select a crypto'}</span>
                {compareMode && <span className="crypto purple">{secondCrypto ? secondCrypto.label : 'Select a second crypto'}</span>}
            </div>

            <Chart
                currentSymbol={currentCrypto ? currentCrypto.value : null}
                secondSymbol={secondCrypto ? secondCrypto.value : null}
                compareMode={compareMode}
            />
        </div>
    );
}

export default GraphSelection;
