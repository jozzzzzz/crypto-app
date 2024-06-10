import React, { useState } from 'react';
import { useTable } from 'react-table';
import useCryptoTableData from '../../callAPI/CryptoTableData';
import './CryptoTable.css';

function CryptoTable() {
    const [count, setCount] = useState(50);
    const [inputValue, setInputValue] = useState('');
    const allData = useCryptoTableData();
    const data = Array.isArray(allData) ? allData : [];

    const filteredData = inputValue
        ? data.filter(crypto => crypto.name.toLowerCase().includes(inputValue.toLowerCase()))
        : data;

    const displayedData = filteredData.slice(0, count);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const getChangeClass = (value) => {
        return parseFloat(value) > 0 ? 'positive-change' : 'negative-change';
    };

    const columns = React.useMemo(
        () => [
            {
                Header: '#',
                accessor: 'rank'
            },
            {
                Header: 'Name',
                accessor: 'name'
            },
            {
                Header: 'Price',
                accessor: 'price'
            },
            {
                Header: '24h %',
                accessor: 'change24h',
                Cell: ({ value }) => (
                    <span className={getChangeClass(value)}>
                        {value}
                    </span>
                )
            },
            {
                Header: '1m %',
                accessor: 'change1m',
                Cell: ({ value }) => (
                    <span className={getChangeClass(value)}>
                        {value}
                    </span>
                )
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
    } = useTable({ columns, data: displayedData });

    return (
        <div>
            <div className="crypto-controls">
                <div className="crypto-count-selector">
                    <label htmlFor="crypto-count">Nombre de cryptos à afficher : </label>
                    <select
                        id="crypto-count"
                        value={count}
                        onChange={(e) => setCount(Number(e.target.value))}
                        className="styled-select"
                    >
                        {[50, 250, 500].map((option) => (
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
                        placeholder="Entrez le nom de la crypto"
                        className="styled-input"
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
