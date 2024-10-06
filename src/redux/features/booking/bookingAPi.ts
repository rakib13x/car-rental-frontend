import { TBooking } from "../../../types/booking";
import { TResponseRedux } from "../../../types/global";
import { baseApi } from "../../api/baseApi";

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
      query: (bookingData) => {
        const token = localStorage.getItem("token");

        return {
          url: `/bookings`,
          method: "POST",
          body: bookingData,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
      invalidatesTags: ["Bookings"],
    }),

    // Mutation for canceling a booking
    cancelBooking: builder.mutation<void, { bookingId: string }>({
      query: ({ bookingId }) => {
        return {
          url: `/bookings/my-bookings/${bookingId}/cancel`,
          method: "PATCH",
        };
      },
      invalidatesTags: ["Bookings"],
    }),

    // Mutation for approving a booking
    approveBooking: builder.mutation<void, { bookingId: string }>({
      query: ({ bookingId }) => {
        return {
          url: `/bookings/approve/${bookingId}`, // Backend route for approving bookings
          method: "PATCH",
        };
      },
      invalidatesTags: ["Bookings"], // Invalidate bookings tag to refetch updated data
    }),

    // Query to get current user's bookings
    getMyBookings: builder.query<TBooking[], void>({
      query: () => ({
        url: "/bookings/my-bookings",
        method: "GET",
      }),
      providesTags: ["Bookings"],
      transformResponse: (response: unknown) => {
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
    createPaymentIntent: builder.mutation<
      { clientSecret: string },
      { bookingId: string; amount: number }
    >({
      query: ({ bookingId, amount }) => ({
        url: `/booking-payment/create-payment-intent`,
        method: "POST",
        body: { bookingId, amount },
      }),
    }),

    // Mutation for confirming the payment
    confirmPayment: builder.mutation<void, { paymentIntentId: string }>({
      query: ({ paymentIntentId }) => ({
        url: `/booking-payment/confirm-payment`,
        method: "POST",
        body: { paymentIntentId },
      }),
    }),
    getBookingStats: builder.query<
      {
        success: boolean;
        message: string;
        data: { totalPendingBookings: number; totalApprovedBookings: number };
      }, // <-- Correct type definition
      void
    >({
      query: () => ({
        url: "/bookings/stats",
        method: "GET",
      }),
    }),
    getTotalRevenue: builder.query<
      {
        success: boolean;
        message: string;
        data: { totalRevenue: number }; // <-- Total revenue is inside "data"
      },
      void
    >({
      query: () => ({
        url: "/booking-payment/total-revenue",
        method: "GET",
      }),
    }),
  }),
});

export const {
  useBookCarMutation,
  useGetMyBookingsQuery,
  useCancelBookingMutation,
  useApproveBookingMutation,
  useGetAllBookingsQuery,
  useReturnCarMutation,
  useCreatePaymentIntentMutation,
  useConfirmPaymentMutation,
  useGetBookingStatsQuery,
  useGetTotalRevenueQuery,
} = bookingApi;
