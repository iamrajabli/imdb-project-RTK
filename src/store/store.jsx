import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../api/apiSlice';
import movies from '../pages/Movies/MoviesSlice';

const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        movies
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: process.env.NODE_ENV !== 'production'
});

export default store;