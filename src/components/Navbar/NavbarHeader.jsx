import React from 'react';
import { Link } from 'react-router-dom';
import './NavbarHeader.css';

function NavbarHeader() {
  return (
    <header className="navbar-header">
      <h1>Crypto App</h1>
      <nav>
        <ul>
          <li>
            <Link to="/compare">Compare cryptos</Link>
          </li>
          <li>
            <Link to="/leaderboard">Popular cryptos
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavbarHeader;
