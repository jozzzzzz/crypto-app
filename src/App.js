import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import NavbarHeader from './components/Navbar/NavbarHeader';
import GraphPage from './pages/GraphPage';
import TablePage from './pages/TablePage';

function App() {
    return (
        <Router>
            <div className='App'>
                <NavbarHeader />
                <Routes>
                    <Route path="/compare" element={<GraphPage />} />
                    <Route path="/leaderboard" element={<TablePage />} />
                    <Route path="/" element={<GraphPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
