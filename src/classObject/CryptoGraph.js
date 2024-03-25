import { useState, useEffect } from 'react';
import axios from 'axios';

function CryptoGraph(symbol) {
    const [data, setData] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(`https://api.binance.com/api/v3/klines?symbol=${symbol}&interval=1d`);
          setData(response.data);
        } catch (error) {
          console.error('Error fetching data: ', error);
        }
      };
  
      fetchData();
    }, [symbol]);
  
    return data;
  }

export default CryptoGraph;