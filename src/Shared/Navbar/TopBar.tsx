import { MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";
import { logout, selectCurrentUser } from "../../redux/features/authSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

const TopBar = () => {
  const user = useAppSelector(selectCurrentUser);
  console.log(user);
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="px-3 xl:px-6 py-3 xl:py-4 uppercase text-sm font-semibold bg-gray-100">
      <div className="flex">
        <nav>
          <div className="flex gap-1">
            <p className="color-brand">Phone:</p>
            <Link to="/">+123-567-8908</Link>
          </div>
        </nav>
        <div className="flex-grow"></div>
        <nav>
          <div className="flex gap-4">
            <Link to="/faq" className="hidden sm:block">
              Faq
            </Link>
            {user ? (
              <button onClick={handleLogout} className="text-red-500">
                Logout
                <p>{user.name}</p>
              </button>
            ) : (
              <>
                <Link to="/login">Register</Link>
                <Link to="/login">
                  <div className="flex gap-1 items-center">
                    <MdLocationOn />
                    <p>Login</p>
                  </div>
                </Link>
              </>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default TopBar;
