// This component is used to display the line chart for the monthly sales trend for products A & B.
import { Line } from 'react-chartjs-2';
import './index.css';
import React, { useRef } from 'react';

const Chart = () => {
    const chartRef = useRef(null);
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top",
            },
            title: {
                display: true,
                text: "Line Chart: Monthly Sales Trend for Products A & B",
            },
        },
    }

    const labels = ["January", "February", "March", "April", "May", "June", "July"]

    const productASales = [120, 135, 125, 145, 160, 150, 170]

    const productBSales = [80, 75, 95, 100, 110, 105, 120, 115]

    const data = {
        labels,
        datasets: [
            {
                label: "Product A Sales",
                data: productASales,
                borderColor: "rgb(255, 99, 132)",
                backgroundColor: "rgba(255, 99, 132)",
            },
            {
                label: "Product B Sales",
                data: productBSales,
                borderColor: "rgb(53, 162, 235)",
                backgroundColor: "rgba(53, 162, 235)",
            },
        ],
    }

    return <Line ref={chartRef} options={options} data={data} />
}

function LineChart() {
    
    return (
        <div className="graph-container">
            <Chart />
        </div>
    );
}


export default LineChart