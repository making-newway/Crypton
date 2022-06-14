import React from 'react';
import Loader from 'react-js-loader';

const LoaderScreen = () => (
    <div className="parent-loader">
        <Loader type="bubble-ping" bgColor={"#F1F1F1"} title={"bubble-ping"} />
    </div>
);

export default LoaderScreen;
