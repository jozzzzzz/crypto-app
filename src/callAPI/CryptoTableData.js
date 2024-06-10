import { useState, useEffect } from 'react';

function useCryptoTableData() {
    const [cryptos, setCryptos] = useState([]);

    useEffect(() => {
        async function fetchCryptoData() {
            try {
                const apiUrl = 'https://api.binance.com/api/v3/ticker/24hr';
                const pricesResponse = await fetch(apiUrl);
                const pricesData = await pricesResponse.json();

                const symbols = pricesData
                    .filter(crypto => crypto.symbol.endsWith('USDT'))
                    .map(crypto => ({
                        symbol: crypto.symbol,
                        currentPrice: parseFloat(crypto.lastPrice),
                        change24h: parseFloat(crypto.priceChangePercent),
                    }));

                const fetchHistoricalPrices = async (symbol, interval, limit) => {
                    const response = await fetch(`https://api.binance.com/api/v3/klines?symbol=${symbol}&interval=${interval}&limit=${limit}`);
                    const data = await response.json();
                    return data.map(d => parseFloat(d[2]));
                };

                const cryptosData = await Promise.all(symbols.map(async (crypto, index) => {
                    const prices1m = await fetchHistoricalPrices(crypto.symbol, '1d', 30);

                    const change1m = ((crypto.currentPrice - prices1m[0]) / prices1m[0] * 100).toFixed(2);

                    return {
                        rank: index + 1,
                        name: crypto.symbol.replace("USDT", ""),
                        price: crypto.currentPrice.toFixed(2) + " $",
                        change24h: crypto.change24h.toFixed(2) + " %",
                        change1m: change1m + " %",
                    };
                }));

                setCryptos(cryptosData);
            } catch (error) {
                console.log(error);
            }
        }

        fetchCryptoData();
    }, []);

    return cryptos;
}

export default useCryptoTableData;
