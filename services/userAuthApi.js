import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const userAuthApi = createApi({
  reducerPath: 'userAuthApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://192.168.10.9:6000/user/' }),
  endpoints: (builder) => ({
    getUser: builder.query({
        query: (token) => ({
            url: '/info',
            method: 'GET',
            headers: {
                'authorization': token
            }
        })
    })
  }),
})

export const { useGetUserQuery } = userAuthApi