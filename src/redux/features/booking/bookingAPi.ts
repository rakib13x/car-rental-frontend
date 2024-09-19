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
      invalidatesTags: ["Bookings"],
    }),
    getMyBookings: builder.query({
      query: () => ({
        url: "/bookings/my-bookings",
        method: "GET",
      }),
      providesTags: ["Bookings"],
      transformResponse: (response: TResponseRedux<any>) => response.data,
    }),
    getAllBookings: builder.query({
      query: () => ({
        url: "/bookings",
        method: "GET",
      }),
      providesTags: ["Bookings"],
      transformResponse: (response: TResponseRedux<any>) => response.data,
    }),
    returnCar: builder.mutation({
      query: ({ bookingId, endTime }) => ({
        url: `/cars/return`,
        method: "PUT",
        body: { bookingId, endTime },
      }),
      invalidatesTags: ["Bookings"],
    }),
  }),
});

export const {
  useBookCarMutation,
  useGetMyBookingsQuery,
  useGetAllBookingsQuery,
  useReturnCarMutation,
} = bookingApi;
