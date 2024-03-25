import { useState, useEffect } from 'react';

function CryptoGraph(symbol) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.binance.com/api/v3/klines?symbol=${symbol}&interval=1d`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, [symbol]);

  return data;
}

export default CryptoGraph;