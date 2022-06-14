import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const crypyoHeaders = {
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
    'X-RapidAPI-Key': process.env.REACT_APP_API_KEY
}

const baseUrl = 'https://coinranking1.p.rapidapi.com'

const createReq = (url) => ({ url, headers: crypyoHeaders });

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createReq(`/coins?limit=${count}`)
        }),
        getCryptoDetails: builder.query({
            query: (coinId) => createReq(`/coin/${coinId}`)
        }),
        getCryptoHistory: builder.query({
            query: ({ coinId, period }) => createReq(`/coin/${coinId}/history?timePeriod=${period}`)
        }),
        getExchanges: builder.query({
            query: () => createReq('/reference-currencies?limit=100'),
        }),
        getPrices: builder.query({
            query: ({ coinId, referenceId }) => createReq(`/coin/${coinId}/price?referenceCurrencyUuid=${referenceId}`)
        })
    })
})

export const { useGetCryptosQuery, useGetCryptoDetailsQuery, useGetCryptoHistoryQuery, useGetExchangesQuery, useGetPricesQuery } = cryptoApi;