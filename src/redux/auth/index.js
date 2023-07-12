import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.escuelajs.co/api/v1",
    prepareHeaders: (headers, { getState, endpoint }) => {
      const token = getState().auth.token;
      if (token && endpoint !== 'login') {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credential) => ({
        url: `/auth/login`,
        method: "POST",
        body: credential,
      }),
    }),
    register: builder.mutation({
      query: (credential) => ({
        url: `/users`,
        method: "POST",
        body: credential,
      }),
    }),
    getCurrentUser: builder.query({
      query: () => "/auth/profile",
    }),
  }),
});

export const { useGetCurrentUserQuery, useLoginMutation, useRegisterMutation } =
  authApi;
