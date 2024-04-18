import Chart from '../Cryptos/Chart.jsx';
import { useState } from 'react';

function Graph() {
    const [inputValue, setInputValue] = useState('');
    const [currentSymbol, setCurrentSymbol] = useState('LTCBTC');
    const [inputValue2, setInputValue2] = useState('');
    const [secondSymbol, setSecondSymbol] = useState('BNBBTC');
    const [compareButton, setCompareButton] = useState('Compare crypto');
    const [visible, setVisible] = useState('collapse');

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
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setCurrentSymbol(inputValue.toUpperCase());
    };

    const handleInputChange2 = (e) => {
        setInputValue2(e.target.value);
    };

    const handleFormSubmit2 = (e) => {
        e.preventDefault();
        setSecondSymbol(inputValue2.toUpperCase());
    };
    
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
            <form onSubmit={handleFormSubmit2} style={{visibility: visible}}>
                <input
                    type="text"
                    value={inputValue2}
                    onChange={handleInputChange2}
                    placeholder="BNBBTC"
                />
                <button type="submit">Load second Graph</button>
            </form>
            <button onClick={secondCrypto}>{compareButton}</button>
            <h2>{currentSymbol}</h2>
            <Chart currentSymbol={currentSymbol} secondSymbol={secondSymbol} state={compareButton}/>
        </div>
    );
}

export default Graph;