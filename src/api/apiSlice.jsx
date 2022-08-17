import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';

const _baseKey = 'k_fysqxre9';

// k_gic6n8ig
// k_tpo6gk5d
// k_aaaaaaaa
// k_fysqxre9

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: `https://imdb-api.com/en/API/SearchMovie/${_baseKey}` }),
    tagTypes: ["Movies"],
    endpoints: (builder) => ({
        getMovie: builder.query({
            query: (title) => `/${title}`,
            providesTags: ["Movies"]
        })
    })
});

export const { useGetMovieQuery } = apiSlice;