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
        return {
          data: response.data || [],
          totalPages: response.totalPages ?? 1,
          currentPage: response.currentPage ?? 1,
          totalItems: response.totalItems ?? 0,
        };
      },
    }),

    createCar: builder.mutation<void, FormData>({
      query: (newCar) => ({
        url: `/cars`,
        method: "POST",
        body: newCar,
      }),
      invalidatesTags: ["Cars"],
    }),

    getCarById: builder.query<Car, string>({
      query: (carId) => ({
        url: `/cars/${carId}`,
        method: "GET",
      }),
      providesTags: ["Cars"],
      transformResponse: (response: TResponseRedux<Car>) => response.data,
    }),
    deleteCar: builder.mutation<void, string>({
      query: (carId) => ({
        url: `/cars/${carId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Cars"], // Invalidates Cars tag to refresh the list
    }),
  }),
});

export const {
  useGetAllCarsQuery,
  useCreateCarMutation,
  useGetCarByIdQuery,
  useDeleteCarMutation,
} = carApi;
