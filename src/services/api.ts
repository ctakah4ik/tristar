import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_BASE_URL } from './constants';
import { addApiKeyToQueryString } from '../utils/add-api-key-to-query-string';
import {
    GetMoviesByFilterResponse,
    GetMoviesByFilterResponseWithPage,
    MovieInfo,
} from '../types/movie';

export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
    endpoints: (build) => ({
        getMoviesByFilter: build.mutation<
            GetMoviesByFilterResponseWithPage,
            { filter: string; page: number }
        >({
            query: ({ filter, page }) => addApiKeyToQueryString(`?s=${filter}&page=${page}`),
            transformResponse: (response: GetMoviesByFilterResponse, _, arg) => ({
                page: arg.page,
                ...response,
            }),
        }),
        getMovieInfo: build.mutation<MovieInfo, string>({
            query: (id) => addApiKeyToQueryString(`?i=${id}`),
        }),
    }),
});

export const { useGetMoviesByFilterMutation, useGetMovieInfoMutation } = api;
