import './App.css';
import NavbarHeader from './components/Navbar/NavbarHeader.jsx';
import CryptoData from './components/Cryptos/CryptoData.jsx';
import Graph from './components/Cryptos/Graph.jsx';
import CryptoDisplay from './classObject/CryptoList.js';
import CryptoGraph from './classObject/CryptoGraph.js';
import { useState, useEffect } from 'react';

function App() {
  const [graphLabels, setGraphLabels] = useState([]);
  const [graphData, setGraphData] = useState([]);


  const [inputValue, setInputValue] = useState('');
  const [currentSymbol, setCurrentSymbol] = useState('BTCUSDT');


  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setCurrentSymbol(inputValue.toUpperCase());
  };

  let cryptoList = CryptoDisplay();
  const cryptoGraph = CryptoGraph(currentSymbol);



  useEffect(() => {
    if (cryptoGraph && cryptoGraph.length > 0) {
      const labels = cryptoGraph.map(entry => new Date(entry[0]).toLocaleDateString());
      const data = cryptoGraph.map(entry => parseFloat(entry[1]));
      setGraphLabels(labels);
      setGraphData(data);
    }
  }, [cryptoGraph]);

  return (
    <div className='App'>
      <NavbarHeader />

      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter crypto symbol (e.g., BTCUSDT)"
        />
        <button type="submit">Load Graph</button>
      </form>

      <Graph labels={graphLabels} data={graphData} currentSymbol={currentSymbol} />
      {
        cryptoList.map((crypto, index) => {
          return <CryptoData key={index} {...crypto} />
        })
      }
    </div>
  );
}

export default App;
