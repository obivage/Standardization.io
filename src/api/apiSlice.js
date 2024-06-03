import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseUrl = import.meta.env.VITE_BASE_URL;

const baseQuery = fetchBaseQuery({
  baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ["Products"],
  refetchOnFocus: true,
  refetchOnMountOrArgChange: true,
  refetchOnReconnect: true,
  endpoints: (builder) => ({}),
});
