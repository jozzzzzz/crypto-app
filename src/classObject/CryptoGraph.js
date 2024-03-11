import React, { useState, useEffect } from 'react';

function CryptoGraph() {
    const [cryptos, setCryptos] = useState([]);

    async function fetchData() {
        const response = await fetch('https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=7&interval=daily');
        const data = await response.json();
        setCryptos(data.prices);
    }
    fetchData();
    return cryptos;
}

export default CryptoGraph;