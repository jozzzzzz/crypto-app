import { useState, useEffect } from 'react';

function CryptoDisplay() {
    const [cryptos, setCryptos] = useState([]);

    useEffect(() => {
        fetch('https://api.binance.com/api/v3/ticker/price')
            .then(response => response.json())
            .then(data => {
                const usdtCryptos = data.filter(crypto => crypto.symbol.endsWith('USDT'));
                setCryptos(usdtCryptos);
            })
            .catch(error => console.log(error));
    }, []);

    return cryptos;
}

export default CryptoDisplay;