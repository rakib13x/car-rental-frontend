import { Car, TResponseRedux } from "../../../types/global";
import { baseApi } from "../../api/baseApi";

export const carApi = baseApi.injectEndpoints({
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

        return {
          url: `cars?${params.toString()}`,
          method: "GET",
        };
      },
      transformResponse: (response: TResponseRedux<Car[]>) => {
        return {
          data: response.data || [],
          totalPages: response.totalPages ?? 1,
          currentPage: response.currentPage ?? 1,
          totalItems: response.totalItems ?? 0,
        };
      },
      providesTags: ["Cars"],
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
      transformResponse: (response: TResponseRedux<Car>) => response.data,
      providesTags: ["Cars"],
    }),

    deleteCar: builder.mutation<void, string>({
      query: (carId) => ({
        url: `/cars/${carId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Cars"],
    }),
    updateCar: builder.mutation<
      void,
      { carId: string; body: FormData | Record<string, any> }
    >({
      query: ({ carId, body }) => ({
        url: `/cars/${carId}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["Cars"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetAllCarsQuery,
  useCreateCarMutation,
  useGetCarByIdQuery,
  useDeleteCarMutation,
  useUpdateCarMutation,
} = carApi;
