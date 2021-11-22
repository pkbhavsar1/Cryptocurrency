import { configureStore } from '@reduxjs/toolkit';
import { contactApi } from './services/contact';

import { cryptoApi } from './services/cryptoApi';
import { cryptoNewsApi } from './services/cryptoNews';
import { feedbackApi } from './services/feedbackApi';

export default configureStore({
    reducer:{
        [cryptoApi.reducerPath]:cryptoApi.reducer,
        [cryptoNewsApi.reducerPath]:cryptoNewsApi.reducer,
        [feedbackApi.reducerPath]:feedbackApi.reducer,
        [contactApi.reducerPath]:contactApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cryptoApi.middleware, cryptoNewsApi.middleware, feedbackApi.middleware, contactApi.middleware),
});

