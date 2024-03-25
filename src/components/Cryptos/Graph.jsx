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
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

function Graph({labels = [], data = []}) {
    console.log(data);
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
        <div>
            <h2>Line Example</h2>
            <Line data={chartData} options={options} />
        </div>
    );
}


export default Graph;