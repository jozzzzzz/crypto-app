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
    const [graphLabels, setGraphLabels] = useState([])
    const [dataList, setDataList] = useState([])
    const [graphData, setGraphData] = useState([])

    const symbols = props.symbols;

    const fetchData = CryptoGraph(symbols)
    
    if (fetchData && fetchData[1]) {
        console.log('plein', fetchData)
    } else console.log(fetchData)
    useEffect(() => {
        if (fetchData && fetchData[symbols.length-1]) {
            setGraphLabels(fetchData[0].map(entry => new Date(entry[0]).toLocaleDateString()))
            setDataList(fetchData.map((data, id) => {
                return data.map(entry => parseFloat(entry[1]))
            }))
        }        
    }, [fetchData, symbols])

    useEffect(() => {
        if (dataList && dataList[symbols.length-1]) {
            setGraphData(dataList.map((data, id) => {
                return {
                    label: `${symbols[id]} price`,
                    data: data,
                    fill: false,
                    backgroundColor: 'rgba(192,75,192,0.2)',
                    borderColor: 'rgba(192,75,192,1)',
                }
            }))
            console.log('passed with dataList :', dataList, 'and dataList[1] :', dataList[symbols.length-1])
        }
    }, [dataList, symbols])

    const chartData = {
        labels: graphLabels,
        datasets: graphData,
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