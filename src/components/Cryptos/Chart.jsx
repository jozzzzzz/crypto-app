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
import './Chart.css';

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

    const { currentSymbol } = props;
    const cryptoGraph = CryptoGraph(currentSymbol);
    
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

    const chartData = {
        labels: graphLabels,
        datasets: [
            {
                label: `${currentSymbol} price`,
                data: graphData,
                fill: false,
                backgroundColor: 'rgba(75,192,192,0.2)',
                borderColor: 'rgba(75,192,192,1)',
            },
        ],
    };
    const options = {
        plugins: {
            legend: true,
            tooltip: {
                callbacks: {
                    label: function(context) {
                        var label = context.dataset.label || '';
    
                        if (label) {
                            label += ': ';
                        }
                        if (context.raw.y !== null) {
                            label += new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(context.raw.y);
                        }
                        return label;
                    }
                }
            }
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