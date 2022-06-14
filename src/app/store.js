import { configureStore } from '@reduxjs/toolkit';
import { cryptoApi } from '../services/coinApi';
import { cryptoNewsApi } from '../services/newsApi';

export default configureStore({
    reducer: {
        [cryptoApi.reducerPath]: cryptoApi.reducer,
        [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
    }
});