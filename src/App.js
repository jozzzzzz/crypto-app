import './App.css';
import NavbarHeader from './components/Main/NavbarHeader.jsx';
import CryptoData from './components/Cryptos/CryptoData.jsx';
import Graph from './components/Main/Graph.jsx';
import CryptoDisplay from './classObject/CryptoList.js';

function App() {

  let cryptoList = CryptoDisplay();
  

  return (
    <div className='App'>
      <NavbarHeader />

      <Graph />
      {
        cryptoList.map((crypto, index) => {
          return <CryptoData key={index} {...crypto} />
        })
      }
    </div>
  );
}

export default App;
