import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Line } from 'react-chartjs-2';
import CryptoGraph from '../../callAPI/CryptoGraph.js';
import { useState, useEffect } from 'react';
import './Chart.css'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

function Chart(props) {
    const [graphLabels, setGraphLabels] = useState([]);
    const [graphData, setGraphData] = useState([]);
    const [graphData2, setGraphData2] = useState([]);

    const currentSymbol = props.currentSymbol;
    const secondSymbol = props.secondSymbol;
    const compareMode = props.compareMode;

    const cryptoGraph = CryptoGraph(currentSymbol);
    const secondCryptoGraph = CryptoGraph(secondSymbol);


    useEffect(() => {
        console.log('useEffect :', currentSymbol)
        if (cryptoGraph && cryptoGraph.length > 0) {
            console.log('cryptoGraph :', cryptoGraph[0][0])
            const labels = cryptoGraph.map(entry => new Date(entry[0]).toLocaleDateString());
            const data = cryptoGraph.map(entry => parseFloat(entry[1]));
            setGraphLabels(labels);
            setGraphData(data);
        }
    }, [cryptoGraph, currentSymbol]);

    useEffect(() => {
        if (secondCryptoGraph && secondCryptoGraph.length > 0) {
            console.log('secondCryptoGraph :', secondCryptoGraph[0][0])
            const data = secondCryptoGraph.map(entry => parseFloat(entry[1]));
            setGraphData2(data);
        }
    }, [secondCryptoGraph, secondSymbol]);

    const data = [
        {
            label: `${currentSymbol} price`,
            data: graphData,
            fill: false,
            backgroundColor: 'rgba(75,192,192,0.2)',
            borderColor: 'rgba(75,192,192,1)',
        },
    ];

    if(compareMode) {
        data.push({
            label: `${secondSymbol} price`,
            data: graphData2,
            fill: false,
            backgroundColor: 'rgba(192,75,192,0.2)',
            borderColor: 'rgba(192,75,192,1)',
        });
    }

    const chartData = {
        labels: graphLabels,
        datasets: data,
    };
    
    const options = {
        plugins: {
            legend: true
        },
        scales: {
            y : {
                beginAtZero: true
            }
        }
    };

    return (
        <div className="graph">
            <Line data={chartData} options={options}/>
        </div>
    );
}


export default Chart;