import './App.css';
import NavbarHeader from './components/Main/NavbarHeader.jsx';
import CryptoData from './components/Cryptos/CryptoData.jsx';
import GraphSelection from './components/Main/GraphSelection.jsx';
import CryptoDisplay from './callAPI/CryptoList.js';

function App() {

  let cryptoList = CryptoDisplay();
  

  return (
    <div className='App'>
      <NavbarHeader />

      <GraphSelection />
      {
        cryptoList.map((crypto, index) => {
          return <CryptoData key={index} {...crypto} />
        })
      }
    </div>
  );
}

export default App;
