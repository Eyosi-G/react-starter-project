import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from './common';


export const api = createApi({
    reducerPath: 'api',
    tagTypes: [],
    baseQuery: fetchBaseQuery({
        baseUrl: `${baseUrl}/api/v1`,
    }),
    endpoints(build) {
        return {}
    },
})