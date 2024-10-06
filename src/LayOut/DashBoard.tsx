import { NavLink, Outlet } from "react-router-dom";
import { selectCurrentUser } from "../redux/features/authSlice";
import { useAppSelector } from "../redux/hooks";

const DashBoard = () => {
  const user = useAppSelector(selectCurrentUser);
  const isAdmin = user?.role === "admin";
  const isUser = user?.role === "user";

  return (
    <div>
      <div className="flex">
        <div className="w-64 min-h-screen bg-blue-400">
          <ul className="menu p-4">
            {/* Conditional rendering for Admin */}
            {isAdmin && (
              <>
                <li>
                  <NavLink to="/dashboard/adminHome">Admin Home</NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/userbookings">User Bookings</NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/allUsers">All Users</NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/allcars">All Cars</NavLink>
                </li>
              </>
            )}

            {/* Conditional rendering for User */}
            {isUser && (
              <>
                <li>
                  <NavLink to="/dashboard/mybookings">My Bookings</NavLink>
                </li>
              </>
            )}

            {/* Common route for both Admin and User */}
            <li>
              <NavLink to="/dashboard/myProfile">My Profile</NavLink>
            </li>

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
