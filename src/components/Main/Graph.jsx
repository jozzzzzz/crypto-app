import Chart from '../Cryptos/Chart.jsx';
import { useState, useEffect } from 'react';

function Graph() {
    const [inputValue, setInputValue] = useState('');
    const [currentSymbol, setCurrentSymbol] = useState('PEPEUSDT');

    
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setCurrentSymbol(inputValue.toUpperCase());
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
            <h2>{currentSymbol}</h2>
            <Chart currentSymbol={currentSymbol} />
        </div>
    );
}

export default Graph;