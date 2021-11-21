import { configureStore } from '@reduxjs/toolkit';

import { cryptoApi } from './services/cryptoApi';
import { cryptoNewsApi } from './services/cryptoNews';
import { feedbackApi } from './services/feedbackApi';

export default configureStore({
    reducer:{
        [cryptoApi.reducerPath]:cryptoApi.reducer,
        [cryptoNewsApi.reducerPath]:cryptoNewsApi.reducer,
        [feedbackApi.reducerPath]:feedbackApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cryptoApi.middleware, cryptoNewsApi.middleware, feedbackApi.middleware),
});

