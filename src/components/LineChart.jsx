import React from 'react'
import { Line } from 'react-chartjs-2';

const LineChart = ({ coinHistory, currentPrice, coinName }) => {
    const coinPrice = [];
    const coinTimestamp = [];

    for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
        coinPrice.push(coinHistory?.data?.history[i].price);
        coinTimestamp.push(new Date(coinHistory?.data?.history[i].timestamp).toLocaleDateString());
    }

    const data = {
        labels: coinTimestamp,
        datasets: [
            {
                label: 'Price in USD',
                data: coinPrice,
                fill: false,
                backgroundColor: 'white',
                borderColor: 'green',
            },
        ],
    };

    const options = {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero:true,
                    },
                },
            ],
        },
    };

    return (
        <div className="bg-white mb-5">
            <div className="display-6 text-center mb-5">{coinName} Price Chart</div>
            <div className="container mb-3">
                <b className="m-4">Change: {coinHistory?.data?.change}%</b>
                <b>Current {coinName} Price: $ {currentPrice}</b>
            </div>
            <Line data={data} options={options}/>
        </div>
    )
}

export default LineChart
