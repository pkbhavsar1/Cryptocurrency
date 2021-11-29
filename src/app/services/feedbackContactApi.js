import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const feedbackContactApi = createApi({
    reducerPath : "feedbackContactApi",
    baseQuery : fetchBaseQuery({
        baseUrl:'http://127.0.0.1:8000/',
        prepareHeaders:(header)=>{
            header.set('Content-type','application/json');
            header.set('Authorization', `Token ${document.cookie.split('=')[1]}`);
            return header;
        }
    }),
    endpoints : (builder) => ({
        sendFeedbackDetails: builder.mutation({
            query:(feedback)=>({
                url:`api/feedback/`,
                method:'POST',
                body: feedback,
                })
            }),
        sendQueryDetails: builder.mutation({
            query:(issue)=>({
                url:`api/contact/`,
                method:'POST',
                body: issue,
                })
            })
        })
    })  

export const {useSendFeedbackDetailsMutation, useSendQueryDetailsMutation} = feedbackContactApi;