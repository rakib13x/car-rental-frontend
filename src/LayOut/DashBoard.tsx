import { NavLink, Outlet } from "react-router-dom";

const DashBoard = () => {
  return (
    <div>
      <div className="flex">
        <div className="w-64 min-h-screen bg-blue-400">
          <ul className="menu p-4">
            <>
              <li>
                <NavLink to="/dashboard/adminHome">Admin Home</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/allbookings">All bookings</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/allUsers">All Users</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/all-delivery-men">
                  All Delivery Men
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/statistics">Statistics</NavLink>
              </li>
            </>

            <>
              <li>
                <NavLink to="/dashboard/my-delivery-list">
                  My delivery list
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/my-reviews">My Reviews</NavLink>
              </li>
            </>

            <>
              <li>
                <NavLink to="/dashboard/book-a-parcel">Book a Parcel</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/myParcels">My Parcels</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/myProfile">My Profiles</NavLink>
              </li>
            </>

            <div className="divider">OR</div>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
          </ul>
        </div>
        <div className="flex-1 p-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
