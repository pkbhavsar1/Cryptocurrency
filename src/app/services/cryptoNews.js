import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoNewsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://bing-news-search1.p.rapidapi.com', prepareHeaders:(header)=>{
    header.set("x-bingapis-sdk", "true");
    header.set("x-rapidapi-host","bing-news-search1.p.rapidapi.com");  
    header.set("x-rapidapi-key","4308d61fd5msh444f5e730b5febfp1a0d10jsnef2f7089523f");
    return header;
  } }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({newsCategory, count}) => `/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`,
    }),
  }),
})

export const { useGetCryptoNewsQuery } = cryptoNewsApi;