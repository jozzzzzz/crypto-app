import './App.css';
import NavbarHeader from './components/Navbar/NavbarHeader.jsx';
import CryptoData from './components/Cryptos/CryptoData.jsx';
import Graph from './components/Cryptos/Graph';
import CryptoDisplay from './classObject/CryptoList.js';
import CryptoGraph from './classObject/CryptoGraph.js';
import { useState } from 'react';

function App() {
  const [graphLabels, setGraphLabels] = useState([]);
  const [graphData, setGraphData] = useState([]);

  let cryptoList = CryptoDisplay();
  let cryptoGraph = CryptoGraph();
  console.log(cryptoGraph)
  cryptoGraph.map((crypto) => {
    console.log(crypto);
    setGraphLabels([...graphLabels, crypto[0]]);
    setGraphData([...graphData, crypto[1]]);
  });

  return (
    <div className='App'>
    <NavbarHeader />
    <Graph label={graphLabels} data={graphData}/>
    {
      cryptoList.map((crypto, index) => {
        return <CryptoData key={index} {...crypto} />
      })
    }
    </div>
  );
}

export default App;
