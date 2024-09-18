import { TQueryParam, TResponseRedux } from "../../../types/global";
import { baseApi } from "../../api/baseApi";

const carApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllCars: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }

        return {
          url: "/cars", // Replace with your actual API endpoint
          method: "GET",
          params: params, // Attach query params if any
        };
      },
      providesTags: ["Cars"], // Optional: use this for cache invalidation if needed
      transformResponse: (response: TResponseRedux<any>) => {
        return {
          data: response.data, // Extract the data you need
          meta: response.meta, // Optional: Meta data like pagination info
        };
      },
    }),

    // You can add more car-related endpoints here, e.g., addCar, updateCar, deleteCar
  }),
});

export const { useGetAllCarsQuery } = carApi;
