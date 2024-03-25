import './NavbarHeader.css'
import logo from '../../logo.svg';
import { useState } from 'react';

function NavbarHeader() {

  return (
    <header className="navbar-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Crypto App</h1>
        <ul>
            <li>Etherum</li>
            <li>Bitcoin</li>
        </ul>
    </header>
  );
}

export default NavbarHeader;