import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const contactApi = createApi({
    reducerPath : "contact",
    baseQuery : fetchBaseQuery({
        baseUrl:'http://127.0.0.1:8000/',
    }),
    endpoints : (builder) => ({
        sendQuery: builder.mutation({
            query:(issue)=>({
                url:`api/contact/`,
                method:'POST',
                body: issue,
                headers:{
                    'Content-type':'application/json',
                }
            })
        })
    })  
})

export const {useSendQueryMutation} = contactApi;