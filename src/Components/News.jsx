import React, { useState } from 'react';
import { Select, Typography, Row, Col, Avatar, Card } from 'antd';
import moment from 'moment';
import { useGetCryptosQuery } from '../services/coinApi';
import { useGetCryptoNewsQuery } from '../services/newsApi';
import LoaderScreen from './LoaderScreen';

const demoImage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';

const News = ({ simple }) => {
    const [newsCategory, setNewsCategory] = useState('Cryptocurrency');
    const { data } = useGetCryptosQuery(100);
    const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory, count: simple ? 6 : 24 });

    if(!data || !cryptoNews) return <LoaderScreen />

    return (
        <Row gutter={[24, 24]}>
            {!simple && (
                <Col span={24}>
                <Select showSearch className="select-news" placeholder="Select a Crypto" optionFilterProp="children" onChange={(value) => setNewsCategory(value)} filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) }>
                    <Select.Option value="Cryptocurency">Cryptocurrency</Select.Option>
                    {data?.data?.coins.map((curr, i) => 
                        (<Select.Option key={i} value={curr.name}>{curr.name}</Select.Option>)
                    )}
                </Select>
                </Col>
            )}

            {cryptoNews.value.map((news, i) => (
                <Col xs={24} sm={12} lg={8} key={i}>
                    <Card hoverable className="news-card">
                        <a href={news.url} target="_blank" rel="noreferrer">
                        <div className="news-image-container">
                            <Typography.Title className="news-title" level={4}>{news.name.length > 50 ? `${news.name.substring(0, 100)}...` : news.name }</Typography.Title>
                            <img src={news?.image?.thumbnail?.contentUrl || demoImage} alt="" />
                        </div>
                        <p>{news.description.length > 100 ? `${news.description.substring(0, 100)}...` : news.description}</p>
                        <div className="provider-container">
                            <div>
                                <Avatar src={news?.provider[0]?.image?.thumbnail?.contentUrl || demoImage} alt="" />
                                <Typography.Text className="provider-name">{news?.provider[0]?.name}</Typography.Text>
                            </div>
                            <Typography.Text>{moment(news.datePublished).startOf('ss').fromNow()}</Typography.Text>
                        </div>
                        </a>
                    </Card>
                </Col>
            ))}
        </Row>
    );
};

export default News;