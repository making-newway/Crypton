import React from 'react';
import millify from 'millify';
import { Typography, Col, Row, Statistic } from 'antd';
import { Link } from 'react-router-dom';
import { useGetCryptosQuery } from '../services/coinApi';
import { Cryptocurrencies, News } from '../Components';
import LoaderScreen from './LoaderScreen';

const Homepage = () => {
    const { data, isFetching } = useGetCryptosQuery(10);
    if(isFetching) return <LoaderScreen />

    
    const globalStats = data.data.stats;

    return (
        <div>
            <Typography.Title level={2} className="heading">Global Crypto Status</Typography.Title>
            <Row>
                <Col span={12}><Statistic title="Total Cryptocurrencies" value={globalStats.total} /></Col>
                <Col span={12}><Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)} /></Col>
                <Col span={12}><Statistic title="Total Market Cap" value={millify(globalStats.totalMarketCap)} /></Col>
                <Col span={12}><Statistic title="Total 24h Volume" value={millify(globalStats.total24hVolume)} /></Col>
                <Col span={12}><Statistic title="Total Markets" value={millify(globalStats.totalMarkets)} /></Col>
            </Row>
            <div className="home-heading-container">
                <Typography.Title level={2} className="home-title">Top 10 Cryptocurrencies</Typography.Title>
                <Typography.Title level={3} className="show-more"><Link to='/cryptocurrency'>Show More</Link></Typography.Title>
            </div>
            <Cryptocurrencies simple />
            <div className="home-heading-container">
                <Typography.Title level={2} className="home-title">Top 10 Cryptocurrencies</Typography.Title>
                <Typography.Title level={3} className="show-more"><Link to='/cryptocurrency'>Show More</Link></Typography.Title>
            </div>
            <News simple />
        </div>
    )
}

export default Homepage