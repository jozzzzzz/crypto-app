import React, { useState } from 'react';
import './App.css';
import NavbarHeader from './components/Navbar/NavbarHeader.jsx';
import GraphSelection from './components/GraphSelection/GraphSelection.jsx';
import CryptoTable from './components/CryptoTable/CryptoTable.jsx';

function App() {
    return (
        <div className='App'>
            <NavbarHeader />
            <GraphSelection />
            <CryptoTable />
        </div>
    );
}

export default App;
