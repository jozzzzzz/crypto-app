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

  let cryptoList = CryptoDisplay();
  let cryptoGraph = CryptoGraph();
  useEffect(() => {
    if (cryptoGraph && cryptoGraph.length > 0) {
      const labels = cryptoGraph.map(crypto => crypto[0]);
      const data = cryptoGraph.map(crypto => crypto[1]);
      setGraphLabels(labels);
      setGraphData(data);
    }
  }, [cryptoGraph]);

  return (
    <div className='App'>
    <NavbarHeader />
    {<Graph labels={graphLabels} data={graphData} />}
    { 
      cryptoList.map((crypto, index) => {
        return <CryptoData key={index} {...crypto} />
      })
    }
    </div>
  );
}

export default App;
