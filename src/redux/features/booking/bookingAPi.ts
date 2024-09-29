// bookingApi.ts
import { TBooking } from "../../../types/booking";
import { TResponseRedux } from "../../../types/global";
import { baseApi } from "../../api/baseApi";

// Interface for transformed response with pagination
interface GetAllBookingsTransformed {
  bookings: TBooking[];
  totalPages: number;
  currentPage: number;
  totalItems: number;
}

const bookingApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Mutation for booking a car
    bookCar: builder.mutation<void, Partial<TBooking>>({
      query: (bookingData) => ({
        url: `/bookings`,
        method: "POST",
        body: bookingData,
      }),
      invalidatesTags: ["Bookings"],
    }),

    // Query to get current user's bookings
    getMyBookings: builder.query<TBooking[], void>({
      query: () => ({
        url: "/bookings/my-bookings",
        method: "GET",
      }),
      providesTags: ["Bookings"],
      transformResponse: (response: unknown) => {
        // Cast the unknown response to TResponseRedux<TBooking[]>
        const typedResponse = response as TResponseRedux<TBooking[]>;
        return typedResponse.data;
      },
    }),

    // Query to get all bookings (with pagination)
    getAllBookings: builder.query<GetAllBookingsTransformed, void>({
      query: () => ({
        url: "/bookings",
        method: "GET",
      }),
      providesTags: ["Bookings"],
      transformResponse: (response: unknown) => {
        // Cast the unknown response to TResponseRedux<TBooking[]>
        const typedResponse = response as TResponseRedux<TBooking[]>;
        return {
          bookings: typedResponse.data,
          totalPages: typedResponse.totalPages ?? 1,
          currentPage: typedResponse.currentPage ?? 1,
          totalItems: typedResponse.totalItems ?? typedResponse.data.length,
        };
      },
    }),

    // Mutation for returning a car
    returnCar: builder.mutation<void, { bookingId: string; endTime: string }>({
      query: ({ bookingId, endTime }) => ({
        url: `/cars/return`,
        method: "PUT",
        body: { bookingId, endTime },
      }),
      invalidatesTags: ["Bookings"],
    }),
  }),
});

// Export hooks for usage in functional components
export const {
  useBookCarMutation,
  useGetMyBookingsQuery,
  useGetAllBookingsQuery,
  useReturnCarMutation,
} = bookingApi;
