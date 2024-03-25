import { useState, useEffect } from 'react';
import axios from 'axios';

function CryptoGraph() {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d');
                setData(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    return data;
}

export default CryptoGraph;