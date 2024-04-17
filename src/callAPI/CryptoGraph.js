import { useState, useEffect } from 'react';

function CryptoGraph(symbol) {
    const [data, setData] = useState(null);
  
    useEffect(() => {
        fetch(`https://api.binance.com/api/v3/klines?symbol=${symbol}&interval=1d`)
            .then(console.log(symbol))
            .then(response => response.json())
            .then(data => {
                setData(data);
            })
            .catch(error => console.log(error));
    }, [symbol]);
  
    return data;
}

export default CryptoGraph;