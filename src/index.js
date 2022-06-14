import React from 'react';
import { createRoot } from 'react-dom/client'
import 'antd/dist/antd.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './app/store';

// createRoot(
//     <BrowserRouter>
//         <Provider store={store}>
//             <App />
//         </Provider>
//     </BrowserRouter>,
//   document.getElementById('root')
// );

createRoot(document.getElementById('root'))
    .render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
    )

reportWebVitals();
