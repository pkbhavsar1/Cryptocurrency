import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const backendApi = createApi({
    reducerPath : "backendApi",
    baseQuery : fetchBaseQuery({
        baseUrl:'http://127.0.0.1:8000/',
    }),
    endpoints : (builder) => ({
        sendLoginDetails: builder.mutation({
            query: (loginDetails)=> ({
                url:`auth/`,
                method:'POST',
                body: loginDetails,
                headers:{
                        'Content-type':'application/json',
                    }
                })  
            }),
        sendUserDetails: builder.mutation({
            query: (userDetails)=> ({
                url:`api/users/`,
                method:'POST',
                body: userDetails,
                headers:{
                    'Content-type':'application/json',
                }
            }),
        })
    })  
})

export const {useSendLoginDetailsMutation, useSendUserDetailsMutation} = backendApi;