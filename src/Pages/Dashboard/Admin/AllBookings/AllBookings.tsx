import { useGetAllBookingsQuery } from "../../../../redux/features/booking/bookingAPi";

const AllBookings = () => {
  const { data, isLoading, error } = useGetAllBookingsQuery();
  console.log("Data from API:", data);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading bookings</div>;

  // const { bookings = [], totalPages, currentPage, totalItems } = data || {};
  const bookings = data?.bookings ?? [];

  return (
    <div>
      <h1>All Bookings</h1>

      {bookings.length === 0 ? (
        <p>No bookings available</p>
      ) : (
        bookings.map((booking) => (
          <div key={booking._id}>
            <p>Car: {booking.car}</p>
            <p>Status: {booking.status}</p>
            <p>Total Cost: {booking.totalCost}</p>
          </div>
        ))
      )}

      {/* <div>
        <p>
          Page: {currentPage} / {totalPages}
        </p>
        <p>Total Bookings: {totalItems}</p>
      </div> */}
    </div>
  );
};

export default AllBookings;
