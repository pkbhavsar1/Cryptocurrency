import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const feedbackApi = createApi({
    reducerPath : "feedback",
    baseQuery : fetchBaseQuery({
        baseUrl:'http://127.0.0.1:8000/',
    }),
    endpoints : (builder) => ({
        sendFeedback: builder.mutation({
            query:(feedback)=>({
                url:`api/feedback/`,
                method:'POST',
                body: feedback,
                headers:{
                    'Content-type':'application/json',
                }
            })
        })
    })  
})

export const {useSendFeedbackMutation} = feedbackApi;