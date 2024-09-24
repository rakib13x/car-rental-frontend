import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Car, TResponseRedux } from "../../../types/global";

export const carApi = createApi({
  reducerPath: "carApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000/api/v1" }),
  tagTypes: ["Cars"],
  endpoints: (builder) => ({
    getAllCars: builder.query<
      {
        data: Car[];
        totalPages: number;
        currentPage: number;
        totalItems: number;
      },
      any
    >({
      query: (filters) => {
        const {
          manufacturers = [],
          vehicleTypes = [],
          priceRange = [],
          page = 1,
          limit = 4,
        } = filters || {};
        const params = new URLSearchParams();

        if (manufacturers.length)
          params.append("manufacturers", manufacturers.join(","));
        if (vehicleTypes.length)
          params.append("vehicleTypes", vehicleTypes.join(","));
        if (priceRange.length === 2) {
          params.append("minPrice", priceRange[0].toString());
          params.append("maxPrice", priceRange[1].toString());
        }
        params.append("page", page.toString());
        params.append("limit", limit.toString());

        return `cars?${params.toString()}`;
      },
      transformResponse: (response: TResponseRedux<Car[]>) => {
        // Ensure we are correctly returning all relevant fields
        console.log("API Response:", response); // Log response to inspect data
        return {
          data: response.data || [], // Cars data
          totalPages: response.totalPages ?? 1, // Ensure totalPages comes directly from the response
          currentPage: response.currentPage ?? 1, // Current page from the response
          totalItems: response.totalItems ?? 0, // Total items from the response
        };
      },
    }),
    getCarById: builder.query<Car, string>({
      query: (carId) => ({
        url: `/cars/${carId}`,
        method: "GET",
      }),
      providesTags: ["Cars"],
      transformResponse: (response: TResponseRedux<Car>) => response.data,
    }),
  }),
});

export const { useGetAllCarsQuery, useGetCarByIdQuery } = carApi;
