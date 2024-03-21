import React, { useRef } from 'react';
import { Line } from 'react-chartjs-2';

function Graph({labels = [], data = []}) {
    const chartRef = useRef(null);
    const id = "123"

    
    if (id) {
        const chartElement = document.getElementById(id);
        if (chartElement) {
            chartElement.parentElement.removeChild(chartElement);
        }
    }

    const chartData = {
        labels,
        datasets: [
            {
                label: 'Crypto Value',
                data,
                fill: false,
                backgroundColor: 'rgba(75,192,192,0.2)',
                borderColor: 'rgba(75,192,192,1)',
            },
        ],
    };

    return (
        <div>
            <h2>Line Example</h2>
            <Line data={chartData} ref={chartRef} id={id}/>
        </div>
    );
}


export default Graph;