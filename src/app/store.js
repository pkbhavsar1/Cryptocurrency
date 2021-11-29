import { configureStore } from '@reduxjs/toolkit';

import { cryptoApi } from './services/cryptoApi';
import { cryptoNewsApi } from './services/cryptoNews';
import { backendApi} from './services/backendApi';
import { feedbackContactApi } from './services/feedbackContactApi';

export default configureStore({
    reducer:{
        [cryptoApi.reducerPath]:cryptoApi.reducer,
        [cryptoNewsApi.reducerPath]:cryptoNewsApi.reducer,
        [backendApi.reducerPath]:backendApi.reducer,
        [feedbackContactApi.reducerPath]:feedbackContactApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cryptoApi.middleware, cryptoNewsApi.middleware,  backendApi.middleware, feedbackContactApi.middleware),
});

