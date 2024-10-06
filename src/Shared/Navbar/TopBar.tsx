//@ts-nocheck
import { useState } from "react";
// import { MdLocationOn } from "react-icons/md";
// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
import { logout, selectCurrentUser } from "../../redux/features/authSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

const TopBar = () => {
  const user = useAppSelector(selectCurrentUser);
  console.log(user);
  const dispatch = useAppDispatch();

  // State to manage dropdown visibility
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
  };

  // Function to toggle dropdown
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <p className="font-semibold text-xl">+1234567890</p>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <Link to="/faq">
            <p className="mr-2 text-lg font-semibold hover:text-orange-500 cursor-pointer">
              Faq
            </p>
          </Link>
        </div>
        {user ? (
          <>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img alt="profile" src={user.profilePhoto} />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a className="justify-between">{user?.name}</a>
                </li>
                <Link to="/dashboard">
                  <li>
                    <a>Dashboard</a>
                  </li>
                </Link>
                <li>
                  <a onClick={handleLogout}>Logout</a>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <>
            <Link to="/login">
              <p className="mr-2 text-lg font-semibold hover:text-orange-500 cursor-pointer">
                Login
              </p>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default TopBar;
