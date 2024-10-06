// @ts-nocheck
import {
  useGetBookingStatsQuery,
  useGetTotalRevenueQuery,
} from "../../../../redux/features/booking/bookingAPi";

const AdminHome = () => {
  // Fetch booking statistics and total revenue
  const {
    data: bookingStats,
    isLoading: isLoadingStats,
    error: errorStats,
  } = useGetBookingStatsQuery();

  const {
    data: revenueData,
    isLoading: isLoadingRevenue,
    error: errorRevenue,
  } = useGetTotalRevenueQuery();

  if (isLoadingStats || isLoadingRevenue) {
    return <div>Loading data...</div>;
  }

  if (errorStats || errorRevenue) {
    return <div>Error loading data</div>;
  }

  return (
    <div>
      <div className="stats shadow">
        {/* Total Pending Bookings */}
        <div className="stat">
          <div className="stat-figure text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-8 w-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              ></path>
            </svg>
          </div>
          <div className="stat-title">Total Pending Bookings</div>
          <div className="stat-value text-primary">
            {bookingStats?.data?.totalPendingBookings || 0}
          </div>
          <div className="stat-desc">Pending approvals</div>
        </div>

        {/* Total Approved Bookings */}
        <div className="stat">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-8 w-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              ></path>
            </svg>
          </div>
          <div className="stat-title">Total Approved Bookings</div>
          <div className="stat-value text-black">
            {bookingStats?.data?.totalApprovedBookings || 0}
          </div>
          <div className="stat-desc">Approved bookings this month</div>
        </div>

        {/* Total Revenue */}
        <div className="stat">
          <div className="stat-figure text-accent">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-8 w-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8c-2 0-4 1-4 3s1 3 4 3 4-1 4-3-1-3-4-3m0 12a9 9 0 100-18 9 9 0 000 18z"
              ></path>
            </svg>
          </div>
          <div className="stat-title">Total Revenue</div>

          <div className="stat-value text-black">
            {/* @ts-ignore */} ${revenueData?.totalRevenue || 0}{" "}
            {/* Correctly access totalRevenue inside data */}
          </div>
          <div className="stat-desc">Revenue generated this month</div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
