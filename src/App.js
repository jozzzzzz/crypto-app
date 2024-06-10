import './App.css';
import NavbarHeader from './components/Navbar/NavbarHeader.jsx';
import CryptoData from './components/CryptoData/CryptoData.jsx';
import GraphSelection from './components/GraphSelection/GraphSelection.jsx';
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