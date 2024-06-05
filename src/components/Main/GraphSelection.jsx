import React, { useState } from 'react';
import Chart from '../Cryptos/Chart.jsx';
import CryptoDisplay from '../../callAPI/CryptoList.js';
import SelectCrypto from '../Cryptos/selectCrypto.jsx';
import './GraphSelection.css';
import { number } from 'yargs';

function GraphSelection() {
    const [currentCrypto, setCurrentCrypto] = useState([{ value: 'LTCBTC', label: 'LTCBTC' }]);
    const [numberOfInCryptoInGraph, setNumberOfInCryptoInGraph ] = useState(['id']);

    const allCryptos = CryptoDisplay().map(crypto => ({ value: crypto.symbol, label: crypto.symbol }));

    const handleCryptoChange = (selectedOption, index) => {
        setCurrentCrypto(selectedOption);
    };

    const addCrypto = () => {
        setNumberOfInCryptoInGraph([...numberOfInCryptoInGraph, 'id']);
    };


    return (
        <div>
            <div className="container">
                {
                    numberOfInCryptoInGraph.map((_, index) => (
                        <SelectCrypto key={index} allCryptos={allCryptos} cryptoName={currentCrypto} changeCryptoName={handleCryptoChange} />
                    ))
                }
            </div>

            <button onClick={addCrypto}>Add crypto</button>

            <Chart
                currentSymbol={currentCrypto.value}
                secondSymbol={secondCrypto.value}
                compareMode={compareMode}
            />
        </div>
    );
}

export default GraphSelection;