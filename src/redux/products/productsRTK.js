import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://64a51c5c00c3559aa9bf13c5.mockapi.io/api/v1",
  }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => `/products`,
    }),
    getCart: builder.query({
      query: () => `/cart`,
      providesTags: ["Cart"],
    }),
    addToCart: builder.mutation({
      query: (product) => ({
        url: `/cart`,
        method: "POST",
        body: product,
      }),
      invalidatesTags: ["Cart"],
    }),
    deleteFromCart: builder.mutation({
        query: (productId) => ({
          url: `/cart/${productId}`,
          method: "DELETE"
        }),
        invalidatesTags: ["Cart"],
      }),
  }),
});

export const { useGetProductsQuery, useAddToCartMutation, useGetCartQuery, useDeleteFromCartMutation } = productsApi;
