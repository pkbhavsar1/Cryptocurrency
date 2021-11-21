import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://coinranking1.p.rapidapi.com', prepareHeaders:(header)=>{
    header.set("x-rapidapi-host", "coinranking1.p.rapidapi.com");
    header.set("x-rapidapi-key","4308d61fd5msh444f5e730b5febfp1a0d10jsnef2f7089523f");  
    return header;
  } }),
  endpoints: (builder) => ({
    getCoins: builder.query({
      query: (count) => `/coins?limit=${count}`,
    }),
    getCryptoDetails: builder.query({
      query: (coinId) => `/coin/${coinId}`,
    }),
    getCryptoHistory: builder.query({
      query: ({ coinId, timeperiod }) => `coin/${coinId}/history/${timeperiod}`,
    }),
    getExchanges: builder.query({
      query: () => `/exchanges`,
    }),
  }),
})

export const { useGetCoinsQuery, useGetCryptoHistoryQuery, useGetCryptoDetailsQuery, useGetExchangesQuery } = cryptoApi;

// // kunal.pagariya@gmail.com