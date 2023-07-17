import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userSlice = createApi({
  reducerPath: "userAPI",
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "/photos?_limit=21",
    }),
    getUserById: builder.query({
      query: ({ id }) => `/photos/${id}`,
    }),
  }),
});

export const { useGetUsersQuery, useGetUserByIdQuery } = userSlice;
