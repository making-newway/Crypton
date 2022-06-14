import React, { useEffect, useState } from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { Card, Col, Row, Input } from 'antd';
import { useGetCryptosQuery } from '../services/coinApi';
import LoaderScreen from './LoaderScreen';

const Cryptocurrencies = ({ simple }) => {
    const count = simple ? 10 : 100;
    const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
    const [cryptos, setCryptos] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        if(cryptosList) {
            setCryptos(cryptosList.data.coins);
            const filteredData = cryptosList.data.coins.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));
            setCryptos(filteredData);
        }
    },[cryptosList, search]);

    if(isFetching) return <LoaderScreen />;    

    return (
        <div>
            {!simple && (
                <div className="search-crypto">
                    <Input placeholder='Search Cryptocurrency' onChange={(e) => setSearch(e.target.value)}/>
                </div>
            )}
            <Row gutter={[32, 32]} className="crypto-card-container">
                {cryptos.map((curr) => (
                    <Col xs={24} sm={12} lg={6} className='crypto-card' key={curr.uuid}>
                        <Link key={curr.uuid} to={`/cryptocurrency/${curr.uuid}`}>
                            <Card title={`${curr.rank}. ${curr.name}`} extra={<img alt={`${curr.name}`} className="crypto-image" src={curr.iconUrl} />} hoverable>
                                <p>Price: {millify(curr.price)}</p>
                                <p>Market Cap: {millify(curr.marketCap)}</p>
                                <p>Daily Change: {curr.change}%</p>
                            </Card>
                        </Link>
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default Cryptocurrencies