import React from 'react';
import { Line } from 'react-chartjs-2';

function Graph(props) {
    const { labels, data } = props;
    const chartData = {
        labels: labels,
        datasets: [
            {
                label: 'Crypto Value',
                data: data,
                fill: false,
                backgroundColor: 'rgba(75,192,192,0.2)',
                borderColor: 'rgba(75,192,192,1)',
            },
        ],
    };

    const options = {
        scales: {
            xAxes: [{
                type: 'time',
                time: {
                    unit: 'hour', // Change this according to your data
                    displayFormats: {
                        hour: 'hA', // Hourly format
                    }
                }
            }],
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                },
            }],
        },
    };
    return (
        <div>
            <h2>Line Example</h2>
            <Line data={data} options={options} />
        </div>
    );
}


export default Graph;