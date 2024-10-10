import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import PayModal from "../../../../Modal/PayModal";
import {
  useCancelBookingMutation,
  useGetMyBookingsQuery,
} from "../../../../redux/features/booking/bookingAPi";
import { TBooking } from "../../../../types/booking";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);
console.log(stripePromise);

const MyBookings = () => {
  const {
    data: fetchedBookings,
    isLoading,
    error,
  } = useGetMyBookingsQuery(undefined);
  const [cancelBooking] = useCancelBookingMutation();
  const [bookings, setBookings] = useState<TBooking[]>([]);

  const [showPayModal, setShowPayModal] = useState(false);
  const [selectedBookingId, setSelectedBookingId] = useState<string | null>(
    null
  );
  const [selectedPrice, setSelectedPrice] = useState<number>(0);

  useEffect(() => {
    if (fetchedBookings) {
      setBookings(fetchedBookings);
    }
  }, [fetchedBookings]);

  // Loading state
  if (isLoading) return <p>Loading your bookings...</p>;

  // Handle 404 error with a custom message for no bookings
  if (
    error &&
    (error as any)?.status === 404 &&
    (error as any)?.data?.message === "No Data Found"
  ) {
    return (
      <div className="text-center py-10">
        <p className="text-gray-600 text-lg">You haven't booked any car yet.</p>
      </div>
    );
  }

  // Handle other errors
  if (error) {
    return <p>Failed to fetch your bookings. Please try again later.</p>;
  }

  // Handle no bookings
  if (!bookings || bookings.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="text-gray-600 text-lg">You haven't booked any car yet.</p>
      </div>
    );
  }

  const handleCancelBooking = async (bookingId: string) => {
    try {
      await cancelBooking({ bookingId }).unwrap();
      setBookings((prevBookings) =>
        prevBookings.map((booking) =>
          booking._id === bookingId
            ? { ...booking, status: "cancelled" }
            : booking
        )
      );
      Swal.fire({
        title: "Success!",
        text: "Booking canceled successfully.",
        icon: "success",
        confirmButtonText: "OK",
      });
    } catch (error) {
      console.error("Failed to cancel booking:", error);
      Swal.fire({
        title: "Error!",
        text: "There was an error canceling your booking. Please try again.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  const handleOpenPayModal = (bookingId: string, price: number) => {
    setSelectedBookingId(bookingId);
    setSelectedPrice(price);
    setShowPayModal(true);
  };

  const togglePayModal = () => {
    setShowPayModal(false);
    setSelectedBookingId(null);
    setSelectedPrice(0);
  };

  const handlePaymentSuccess = (bookingId: string) => {
    setBookings((prevBookings) =>
      prevBookings.map((booking) =>
        booking._id === bookingId ? { ...booking, payStatus: "paid" } : booking
      )
    );
  };

  const getStatusClasses = (status: string) => {
    switch (status) {
      case "approved":
        return "bg-green-100 text-green-700";
      case "cancelled":
        return "bg-red-100 text-red-700";
      case "pending":
        return "bg-yellow-100 text-yellow-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div>
      <div className="sm:px-6 w-full">
        <div className="px-4 md:px-10 py-4 md:py-7">
          <div className="lg:flex items-center justify-between">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">
              My Bookings
            </p>
          </div>
        </div>
        <div className="bg-white px-4 md:px-8 xl:px-10 overflow-x-auto">
          <table className="w-full whitespace-nowrap">
            <thead>
              <tr className="h-20 w-full text-sm leading-none text-gray-600">
                <th className="font-normal text-left pl-4">#</th>
                <th className="font-normal text-left pl-11">Car Name</th>
                <th className="font-normal text-left pl-10">Date</th>
                <th className="font-normal text-left">Start Time</th>
                <th className="font-normal text-left">Total Cost</th>
                <th className="font-normal text-left">Status</th>
                <th className="font-normal text-left">Action</th>
                <th className="font-normal text-left">Payment Status</th>
              </tr>
            </thead>
            <tbody className="w-full">
              {bookings.map((booking, index) => (
                <tr
                  key={booking._id}
                  className="h-20 text-sm leading-none text-gray-700 border-b border-t border-gray-200 bg-white hover:bg-gray-100"
                >
                  <td className="pl-4">{index + 1}</td>
                  <td className="pl-11">
                    <div className="flex items-center">
                      {booking.car?.name || "N/A"}
                    </div>
                  </td>
                  <td>
                    <p className="mr-16 pl-10">
                      {new Date(booking.date).toLocaleDateString()}
                    </p>
                  </td>
                  <td>
                    <p className="mr-16">{booking.startTime}</p>
                  </td>
                  <td>
                    <p className="mr-16">${booking.totalCost}</p>
                  </td>
                  <td>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusClasses(
                        booking.status
                      )}`}
                    >
                      {booking.status}
                    </span>
                  </td>
                  <td>
                    <div className="flex flex-col items-center justify-center gap-4">
                      <button
                        className={`bg-gray-100 hover:bg-gray-200 py-2.5 px-5 rounded text-sm leading-3 text-gray-500 focus:outline-none ${
                          booking.status === "cancelled" ||
                          booking.status === "approved"
                            ? "cursor-not-allowed opacity-50"
                            : ""
                        }`}
                        onClick={() => handleCancelBooking(booking._id)}
                        disabled={
                          booking.status === "approved" ||
                          booking.status === "cancelled"
                        }
                      >
                        Cancel
                      </button>
                    </div>
                  </td>
                  <td>
                    <button
                      className={`py-2.5 px-5 rounded text-sm leading-3 focus:outline-none ${
                        booking.payStatus === "paid"
                          ? "bg-green-200 text-green-600 cursor-not-allowed" // Style for paid status
                          : booking.status === "approved"
                          ? "bg-gray-100 hover:bg-gray-200 text-gray-500"
                          : "bg-gray-300 text-gray-400 cursor-not-allowed"
                      }`}
                      onClick={() =>
                        handleOpenPayModal(booking._id, booking.totalCost)
                      }
                      disabled={
                        booking.payStatus === "paid" ||
                        booking.status !== "approved"
                      }
                    >
                      {booking.payStatus === "paid" ? "Paid" : "Pay"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* PayModal Component */}
      {showPayModal && (
        <Elements stripe={stripePromise}>
          <PayModal
            showModal={showPayModal}
            toggleModal={togglePayModal}
            bookingId={selectedBookingId}
            price={selectedPrice}
            refetchBookings={() => setBookings(fetchedBookings || [])}
            onPaymentSuccess={handlePaymentSuccess}
          />
        </Elements>
      )}
    </div>
  );
};

export default MyBookings;
