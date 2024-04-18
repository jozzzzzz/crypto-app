import Chart from '../Cryptos/Chart.jsx';
import { useState } from 'react';
import CryptoDisplay from '../../callAPI/CryptoList.js';

function GraphSelection() {
    const [inputValue, setInputValue] = useState('');
    const [currentSymbol, setCurrentSymbol] = useState('LTCBTC');
    const [inputValue2, setInputValue2] = useState('');
    const [secondSymbol, setSecondSymbol] = useState('BNBBTC');
    const [compareButton, setCompareButton] = useState('Compare crypto');
    const [visible, setVisible] = useState('collapse');
    const [suggestions, setSuggestions] = useState([]);
    const [suggestions2, setSuggestions2] = useState([]);

    const allCryptos = CryptoDisplay().map(crypto => crypto.symbol);

    const secondCrypto = () => {
        if (compareButton === 'Compare crypto') {
            setCompareButton('Remove comparison');
            setVisible('visible');
        } else {
            setCompareButton('Compare crypto');
            setVisible('collapse');
        }
    };
    
    const handleInputChange = (e) => {
        setInputValue(e.target.value);        
        const filteredSuggestions = allCryptos.filter(crypto => crypto.startsWith(e.target.value.toUpperCase()));
        console.log(filteredSuggestions);
        setSuggestions(filteredSuggestions.slice(0, 5));
    };
    const handleFormSubmit = (e) => {
        e.preventDefault();
        setCurrentSymbol(inputValue.toUpperCase());
    };
    const handleSuggestions = (suggestion) => {
        setInputValue(suggestion);
        setSuggestions([]);
        setCurrentSymbol(suggestion);
    };

    const handleInputChange2 = (e) => {
        setInputValue2(e.target.value);
        const filteredSuggestions = allCryptos.filter(crypto => crypto.startsWith(e.target.value.toUpperCase()));
        setSuggestions2(filteredSuggestions.slice(0, 5));
    };
    const handleFormSubmit2 = (e) => {
        e.preventDefault();
        setSecondSymbol(inputValue2.toUpperCase());
    };
    const handleSuggestions2 = (suggestion) => {
        setInputValue2(suggestion);
        setSuggestions2([]);
        setSecondSymbol(suggestion);
    }
    
    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Enter crypto symbol (e.g., BTCUSDT)"
                />
                <button type="submit">Load Graph</button>
            </form>
            <div>
                {suggestions.map((suggestion, index) => (
                    <div key={index} onClick={() => handleSuggestions(suggestion)} style={{ cursor: 'pointer' }}>
                        {suggestion}
                    </div>
                ))}
            </div>
            <form onSubmit={handleFormSubmit2} style={{visibility: visible}}>
                <input
                    type="text"
                    value={inputValue2}
                    onChange={handleInputChange2}
                    placeholder="BNBBTC"
                />
                <button type="submit">Load second Graph</button>
            </form>
            <div>
                {suggestions2.map((suggestion, index) => (
                    <div key={index} onClick={() => handleSuggestions2(suggestion)} style={{ cursor: 'pointer' }}>
                        {suggestion}
                    </div>
                ))}
            </div>
            <button onClick={secondCrypto}>{compareButton}</button>
            <h2>{currentSymbol}</h2>
            <Chart currentSymbol={currentSymbol} secondSymbol={secondSymbol} state={compareButton}/>
        </div>
    );
}

export default GraphSelection;