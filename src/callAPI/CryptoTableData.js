import { useState, useEffect } from 'react';

function CryptoTableData() {
    const [cryptos, setCryptos] = useState([]);

    useEffect(() => {
        fetch('https://api.binance.com/api/v3/ticker/price')
            .then(response => response.json())
            .then(data => {
                const filteredData = data.filter(crypto => crypto.symbol.endsWith('USDT')).map((crypto, index) => ({
                    rank: index + 1,
                    name: crypto.symbol.replace("USDT", ""),
                    price: parseFloat(crypto.price).toFixed(2) + " $",
                    change1h: (Math.random() * 2 - 1).toFixed(2) + " %",
                    change24h: (Math.random() * 2 - 1).toFixed(2) + " %",
                    change7d: (Math.random() * 2 - 1).toFixed(2) + " %",
                    marketCap: (Math.random() * 1e10).toFixed(2),
                    volume24h: (Math.random() * 1e9).toFixed(2)
                }));
                console.log(filteredData); // Ajoutez cette ligne pour déboguer
                setCryptos(filteredData);
            })
            .catch(error => console.log(error));
    }, []);

    return cryptos;
}

export default CryptoTableData;
