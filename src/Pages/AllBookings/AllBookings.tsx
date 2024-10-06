//@ts-nocheck
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "sonner";
import {
  useGetAllBookingsQuery,
  useReturnCarMutation,
} from "../../redux/features/booking/bookingAPi";
import { RootState } from "../../redux/store";

const AllBookings = () => {
  const { user } = useSelector((state: RootState) => state.auth);
  const isAdmin = user?.role === "admin";

  const {
    data: bookings,
    error,
    isLoading,
  } = useGetAllBookingsQuery(undefined);
  const [returnCar, { isLoading: isReturning }] = useReturnCarMutation();

  const [selectedBookingId, setSelectedBookingId] = useState<string>("");
  const [endTime, setEndTime] = useState<string>("");

  useEffect(() => {
    if (!isAdmin) {
      toast.error("Access denied. Only admins can view all bookings.");
    }
  }, [isAdmin]);

  const handleReturnCar = async (bookingId: string) => {
    if (!endTime) {
      toast.error("Please enter the end time");
      return;
    }
    try {
      await returnCar({ bookingId, endTime }).unwrap();
      toast.success("Car returned successfully!");
    } catch (err) {
      toast.error("Failed to return the car.");
    }
  };

  if (!isAdmin) {
    return <div>Access Denied</div>; // Show message if not an admin
  }

  if (isLoading) return <div>Loading...</div>;

  if (error) {
    toast.error("Failed to load bookings");
    return <div>Error loading bookings</div>;
  }

  return (
    <div>
      <h1>All Bookings</h1>
      {bookings.length === 0 ? (
        <p>No bookings available</p>
      ) : (
        <ul>
          {bookings.map((booking) => (
            <li key={booking._id}>
              <p>Booking ID: {booking._id}</p>
              <p>Car: {booking.car.name}</p>
              <p>User: {booking.user.name}</p>
              <p>Date: {new Date(booking.date).toLocaleDateString()}</p>
              <p>Return Time: {booking.endTime}</p>
              <p>Cost: {booking.totalCost}</p>
              {/* Input for End Time */}

              {booking.endTime ? (
                <p>Returned</p>
              ) : (
                <>
                  <input
                    type="text"
                    placeholder="Enter end time (e.g. 18:00)"
                    value={selectedBookingId === booking._id ? endTime : ""}
                    onChange={(e) => {
                      setEndTime(e.target.value);
                      setSelectedBookingId(booking._id);
                    }}
                    disabled={isReturning}
                  />
                  <button
                    onClick={() => handleReturnCar(booking._id)}
                    disabled={isReturning || selectedBookingId !== booking._id}
                  >
                    {isReturning ? "Returning..." : "Return Car"}
                  </button>
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AllBookings;
