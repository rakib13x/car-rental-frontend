import { useGetMyBookingsQuery } from "../../redux/features/booking/bookingAPi";
const MyBookings = () => {
  const { data: bookings, isLoading, error } = useGetMyBookingsQuery(undefined);

  if (isLoading) return <p>Loading your bookings...</p>;
  if (error)
    return <p>Failed to fetch your bookings. Please try again later.</p>;

  if (!bookings || bookings.length === 0) {
    return <p>You have no bookings.</p>;
  }

  return (
    <div>
      <h2>My Bookings</h2>
      <ul>
        {bookings.map((booking) => (
          <li key={booking._id}>
            <h3>Car: {booking.car.name}</h3>
            <p>Date: {new Date(booking.date).toLocaleDateString()}</p>
            <p>Start Time: {booking.startTime}</p>
            <p>Total Cost: ${booking.totalCost}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyBookings;
