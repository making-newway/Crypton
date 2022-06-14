import React from 'react';
import { Layout, Typography } from 'antd';
import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Homepage, CryptoDetails, Cryptocurrencies, News } from './Components';

function App() {
    return (
        <div className="app">
            <div className="navbar">
                <Navbar />
            </div>
            <div className="main">
                <Layout>
                    <div className="routes">
                        <Routes>
                            <Route path="/" element={<Homepage />} />
                            <Route path='cryptocurrency'>
                                <Route index={true} element={<Cryptocurrencies />} />
                                <Route path=':coinId' element={<CryptoDetails />} />
                            </Route>
                            <Route path='/news' element={<News />} />
                        </Routes>
                    </div>
                </Layout>
                <div className="footer">
                    <Typography.Title level={5} style={{color: 'white', textAlign: 'center'}}>
                        Crypton<br/>
                        All Rights Reserved
                    </Typography.Title>
                </div>
            </div>
        </div>
    );
}

export default App;
