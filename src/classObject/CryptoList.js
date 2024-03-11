import React, { useState, useEffect } from 'react';

function CryptoDisplay() {
    const [cryptos, setCryptos] = useState([]);

    useEffect(() => {
        fetch('https://api.binance.com/api/v3/ticker/price')
            .then(response => response.json())
            .then(data => {
                setCryptos(data);
            })
            .catch(error => console.log(error));
    }, []);

    return cryptos;
}

export default CryptoDisplay;