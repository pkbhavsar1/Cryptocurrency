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
  }),
})

export const { useGetCoinsQuery } = cryptoApi;

// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// const cryptoApiHeaders = {
//     'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
//     'x-rapidapi-key': '4308d61fd5msh444f5e730b5febfp1a0d10jsnef2f7089523f'
// }

// const baseUrl = 'https://coinranking1.p.rapidapi.com'

// const createRequest = (url)=>({url, headers:cryptoApiHeaders})

// export const cryptoApi = createApi({
//     reducerPath: 'cryptoApi',
//     baseQuery:fetchBaseQuery({baseUrl:baseUrl}),
//     endpoints:(builder)=>({
//         getCryptos:builder.query({
//             query:()=> createRequest('/coins'),
//         }),
//     }),
// });


// export const {
//     useGetCryptosQuery
// } = createApi;

// // var options = {
//     //     method: 'GET',
//     //     url: 'https://coinranking1.p.rapidapi.com/exchanges',
//     //     headers: {
//         //       'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
//         //       'x-rapidapi-key': '4308d61fd5msh444f5e730b5febfp1a0d10jsnef2f7089523f'
//         //     }
//         //   };
// // kunal.pagariya@gmail.com