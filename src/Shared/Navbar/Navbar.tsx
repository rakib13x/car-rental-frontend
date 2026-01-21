import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import {
  ArrowUpRight,
  ChevronDown,
  User,
  LogOut,
  LayoutDashboard,
} from "lucide-react";
import logo from "../../assets/images/logo.png";
import { selectCurrentUser, logout } from "../../redux/features/authSlice";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";

const Navbar = () => {
  const location = useLocation();
  const currentRoute = location.pathname;
  const [navOpen, setNavOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [dashboardLink, setDashboardLink] = useState("/dashboard");

  const user = useAppSelector(selectCurrentUser);
  const dispatch = useAppDispatch();

  useEffect(() => {
    // Set dashboard link based on the user role
    if (user?.role === "admin") {
      setDashboardLink("/dashboard/adminHome");
    } else if (user?.role === "user") {
      setDashboardLink("/dashboard/myProfile");
    }
  }, [user]);

  const toggleMenu = () => {
    setNavOpen(!navOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    dispatch(logout());
    setIsDropdownOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest(".user-dropdown")) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isDropdownOpen]);

  const MainMenu = [
    { label: "Home", href: "/" },
    { label: "About us", href: "/about" },
    { label: "Cars", href: "/cars" },
    { label: "Contact us", href: "/contact" },
  ];

  // Only add Dashboard to menu if user exists
  if (user) {
    MainMenu.push({ label: "Dashboard", href: dashboardLink });
  }

  return (
    <header className="header px-3 xl:px-0 py-5 lg:py-9 relative bg-white shadow-sm">
      <div className="flex items-center max-w-7xl mx-auto">
        <Link to="/">
          <img src={logo} width={200} height={30} alt="Logo" />
        </Link>

        <div className="flex-grow"></div>

        <nav className="uppercase text-black font-semibold absolute md:relative md:block z-20 top-[100%] md:top-auto w-full md:w-auto left-0">
          <div
            className={`grid w-full md:w-auto md:flex gap-2 lg:gap-6 2xl:gap-10 bg-gray-100 md:bg-transparent p-12 md:p-0 place-items-center 
            transition-all ease-in-out
            ${
              !navOpen &&
              "opacity-0 md:opacity-100 invisible md:visible h-0 md:h-full"
            }`}
          >
            {MainMenu.map((link, index) => (
              <Link
                key={index}
                className={`leading-5 pb-1 pt-1 text-black relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-orange-500 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left
                ${currentRoute === link.href && "after:scale-x-100"}`}
                to={link.href}
                onClick={() => setNavOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>

        <div className="flex-grow lg:block"></div>

        <div className="flex gap-3 items-center">
          {/* Mobile menu toggle */}
          <button
            className="px-3 block md:hidden"
            onClick={toggleMenu}
            aria-label="Mobile menu toggle"
          >
            <div className="flex p-2 bg-orange-500 w-[32px] h-[32px] items-center text-center rounded">
              {navOpen ? (
                <IoCloseSharp className="text-white" />
              ) : (
                <GiHamburgerMenu className="text-white" />
              )}
            </div>
          </button>

          {/* User Authentication Section */}
          {user ? (
            <div className="relative user-dropdown">
              <button
                onClick={toggleDropdown}
                className="flex items-center gap-2 px-4 py-2 rounded-full border-2 border-orange-500 hover:bg-orange-50 transition-all"
              >
                <div className="w-8 h-8 rounded-full overflow-hidden bg-orange-500 flex items-center justify-center">
                  {user.profilePhoto ? (
                    <img
                      src={user.profilePhoto}
                      alt={user.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <User className="w-5 h-5 text-white" />
                  )}
                </div>
                <span className="hidden md:block font-semibold text-gray-900">
                  {user.name}
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-gray-700 transition-transform ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 z-50">
                  {/* User Info */}
                  <div className="px-4 py-3 border-b border-gray-100">
                    <p className="font-semibold text-gray-900">{user.name}</p>
                    <p className="text-sm text-gray-500 capitalize">
                      {user.role}
                    </p>
                  </div>

                  {/* Menu Items */}
                  <Link
                    to={dashboardLink}
                    onClick={() => setIsDropdownOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-orange-50 transition-colors"
                  >
                    <LayoutDashboard className="w-5 h-5 text-orange-500" />
                    <span className="font-medium text-gray-700">Dashboard</span>
                  </Link>

                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-3 px-4 py-3 hover:bg-red-50 transition-colors text-left"
                  >
                    <LogOut className="w-5 h-5 text-red-500" />
                    <span className="font-medium text-red-600">Logout</span>
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link to="/signup" className="hidden lg:block">
              <div className="flex items-center justify-center group">
                <button
                  type="button"
                  className="group flex items-center gap-3 px-6 py-3 bg-orange-500 text-white font-semibold rounded-full transition-all shadow-lg hover:shadow-xl"
                >
                  Sign Up
                </button>
                <button
                  type="button"
                  className="w-11 h-11 rounded-full flex items-center justify-center shadow-sm transition-all duration-300 bg-orange-500 group-hover:bg-white group-hover:rotate-45 group-hover:duration-500 group-hover:border-2 group-hover:border-orange-600"
                  tabIndex={-1}
                >
                  <ArrowUpRight
                    className="w-5 h-5 transition-colors duration-1000 text-white group-hover:text-orange-500"
                    aria-hidden
                  />
                </button>
              </div>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
