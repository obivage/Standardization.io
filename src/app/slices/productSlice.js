import { apiSlice } from "../../api/apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "/products",
      providesTags: ["Products"],
      keepUnusedDataFor: 30,
    }),
    getProductsWithLimit: builder.query({
      query: ({ limit }) => `/products?limit=${limit ?? 10}`,
      providesTags: ["Products"],
      keepUnusedDataFor: 30,
    }),
    getSingleProduct: builder.query({
      query: ({ id }) => `/products/${id}`,
      providesTags: ["Product"],
      keepUnusedDataFor: 30,
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetProductsWithLimitQuery,
  useGetSingleProductQuery,
} = authApiSlice;
