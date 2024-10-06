import { useState } from "react";
import Swal from "sweetalert2";
import ReturnModal from "../../../../Modal/ReturnModal";
import {
  useApproveBookingMutation,
  useCancelBookingMutation,
  useGetAllBookingsQuery,
} from "../../../../redux/features/booking/bookingAPi";

const UserBookings = () => {
  const {
    data: fetchedBookings,
    isLoading,
    error,
    refetch,
  } = useGetAllBookingsQuery();
  const [cancelBooking] = useCancelBookingMutation();
  const [approveBooking] = useApproveBookingMutation();

  const [showReturnModal, setShowReturnModal] = useState(false);
  const [selectedBookingId, setSelectedBookingId] = useState<string | null>(
    null
  );

  if (isLoading) return <p>Loading bookings...</p>;
  if (error) return <p>Failed to fetch bookings. Please try again later.</p>;

  if (!fetchedBookings || fetchedBookings.bookings.length === 0) {
    return <p>No bookings available.</p>;
  }

  // Function to open the Return Modal
  const handleReturnClick = (bookingId: string) => {
    setSelectedBookingId(bookingId);
    setShowReturnModal(true);
  };

  // Function to close the modal
  const toggleReturnModal = () => {
    setShowReturnModal(!showReturnModal);
    setSelectedBookingId(null); // Clear the selected bookingId
  };

  // Function to handle booking approval
  const handleApproveBooking = async (bookingId: string) => {
    try {
      await approveBooking({ bookingId }).unwrap();
      Swal.fire({
        title: "Success!",
        text: "Booking approved successfully.",
        icon: "success",
        confirmButtonText: "OK",
      });
      refetch(); // Refetch after approval
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "There was an error approving the booking.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  // Function to handle booking cancellation
  const handleCancelBooking = async (bookingId: string) => {
    try {
      await cancelBooking({ bookingId }).unwrap();
      Swal.fire({
        title: "Cancelled!",
        text: "Booking has been cancelled.",
        icon: "success",
        confirmButtonText: "OK",
      });
      refetch(); // Refetch after cancellation
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "There was an error cancelling the booking.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div>
      <div className="sm:px-6 w-full">
        <div className="px-4 md:px-10 py-4 md:py-7">
          <div className="lg:flex items-center justify-between">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">
              User Bookings
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
                <th className="font-normal text-left">Actions</th>
                <th className="font-normal text-left">Return</th>
              </tr>
            </thead>
            <tbody className="w-full">
              {fetchedBookings.bookings.map((booking, index) => (
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
                    <p className="mr-16">${booking.totalCost || 0}</p>
                  </td>
                  <td>
                    <p className="mr-16">{booking.status}</p>
                  </td>
                  <td>
                    {/* Approve button */}
                    <button
                      className="bg-gray-100 hover:bg-gray-200 py-2.5 px-5 rounded text-sm leading-3 text-gray-500 focus:outline-none"
                      onClick={() => handleApproveBooking(booking._id)}
                      disabled={booking.status !== "pending"} // Only enable if booking is pending
                    >
                      Approve
                    </button>
                    {/* Cancel button */}
                    <button
                      className="bg-red-100 hover:bg-red-200 py-2.5 px-5 ml-2 rounded text-sm leading-3 text-red-500 focus:outline-none"
                      onClick={() => handleCancelBooking(booking._id)}
                      disabled={booking.status === "cancelled"} // Disable if already cancelled
                    >
                      Cancel
                    </button>
                  </td>
                  <td>
                    {/* Return button */}
                    <button
                      className="bg-gray-100 hover:bg-gray-200 py-2.5 px-5 rounded text-sm leading-3 text-gray-500 focus:outline-none"
                      onClick={() => handleReturnClick(booking._id)}
                      disabled={
                        booking.status !== "approved" ||
                        booking.endTime !== null
                      } // Disable if already returned or not approved
                    >
                      {booking.endTime !== null ? "Returned" : "Return"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Render ReturnModal */}
      <ReturnModal
        showModal={showReturnModal}
        toggleModal={toggleReturnModal}
        bookingId={selectedBookingId}
        refetchBookings={refetch} // Pass the refetch function to update the bookings list
      />
    </div>
  );
};

export default UserBookings;
