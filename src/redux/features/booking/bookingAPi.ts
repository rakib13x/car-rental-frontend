import { TResponseRedux } from "../../../types/global";
import { baseApi } from "../../api/baseApi";

const bookingApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    bookCar: builder.mutation({
      query: (bookingData) => ({
        url: `/bookings`,
        method: "POST",
        body: bookingData,
      }),
      invalidatesTags: ["Bookings"], // This invalidates the bookings cache when a new booking is made
    }),
    getMyBookings: builder.query({
      query: () => ({
        url: "/bookings/my-bookings", // API endpoint for fetching my bookings
        method: "GET",
      }),
      providesTags: ["Bookings"], // This will be used for cache invalidation
      transformResponse: (response: TResponseRedux<any>) => response.data, // Extract the data from the response
    }),
  }),
});

export const { useBookCarMutation, useGetMyBookingsQuery } = bookingApi;
