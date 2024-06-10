import React, { useState, useEffect } from 'react';
import { useTable } from 'react-table';
import CryptoTableData from '../../callAPI/CryptoTableData';
import './CryptoTable.css';

function CryptoTable() {
    const [count, setCount] = useState(10); // Initialiser avec 10 cryptos
    const [inputValue, setInputValue] = useState('');
    const allData = CryptoTableData(); // Obtenir toutes les cryptos
    const data = allData.slice(0, count); // Limiter le nombre de cryptos affichés

    const filteredData = inputValue
        ? allData.filter(crypto => crypto.name.toLowerCase().includes(inputValue.toLowerCase()))
        : data;

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const columns = React.useMemo(
        () => [
            {
                Header: '#',
                accessor: 'rank'
            },
            {
                Header: 'Nom',
                accessor: 'name'
            },
            {
                Header: 'Prix',
                accessor: 'price'
            },
            {
                Header: '1h %',
                accessor: 'change1h'
            },
            {
                Header: '24h %',
                accessor: 'change24h'
            },
            {
                Header: '7d %',
                accessor: 'change7d'
            },
            {
                Header: 'Cap. Marché',
                accessor: 'marketCap'
            },
            {
                Header: 'Volume (24h)',
                accessor: 'volume24h'
            }
        ],
        []
    );

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    } = useTable({ columns, data: filteredData });

    return (
        <div>
            <div className="crypto-controls">
                <div className="crypto-count-selector">
                    <label htmlFor="crypto-count">Nombre de cryptos à afficher : </label>
                    <select
                        id="crypto-count"
                        value={count}
                        onChange={(e) => setCount(Number(e.target.value))}
                    >
                        {[50, 250, 500, 1000].map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="crypto-input-selector">
                    <label htmlFor="crypto-input">Voir la crypto : </label>
                    <input
                        id="crypto-input"
                        value={inputValue}
                        onChange={handleInputChange}
                        placeholder="Entrez le symbole"
                    />
                </div>
            </div>
            <table {...getTableProps()} className="crypto-table">
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map(row => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default CryptoTable;
