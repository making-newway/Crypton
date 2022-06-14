import React from 'react';
import { Line } from 'react-chartjs-2';
import { Row, Col, Typography } from 'antd';
import Chart from 'chart.js/auto';


const LineChart = ({ coinHistory, currentPrice, coinName }) => {
    const coinPrice = [];
    const timeStamp = [];

    for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
        coinPrice.push(coinHistory.data.history[i].price);
        timeStamp.push(new Date(coinHistory.data.history[i].timestamp*1000).toLocaleDateString());
    }
      

    const data = {
        labels: timeStamp,
        datasets: [
            {
                label: 'Price In USD',
                data: coinPrice,
                fill: false,
                backgroundColor: '#0071bd',
                borderColor: '#0071bd',
                pointRadius: 0
            },
        ],
    };
    
    const options = {
        scales: {
            y: {
                beginAtZero: true
            }
        },
    };

    return (
        <div>
            <Row className='chart-header'>
                <Typography.Title level={2} className='chart-title'>{ coinName } price chart</Typography.Title>
                <Col className="price-container">
                    <Typography.Title level={5} className='price-change'>{coinHistory?.data?.change}%</Typography.Title>
                    <Typography.Title level={5} className='current-price'>Current {coinName} price: ${currentPrice}</Typography.Title>
                </Col>
            </Row>
            <Line data={data} options={options} />
        </div>
    )
}

export default LineChart