import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";

const Main = () => {
  const location = useLocation();
  console.log(location);
  const noHeaderFooter =
    location.pathname.includes("login") || location.pathname.includes("signup");
  console.log(noHeaderFooter);

  return (
    <div className="px-0 xl:px-9 2xl:px-16">
      {noHeaderFooter || <Navbar />}
      <Outlet />
      {noHeaderFooter || <Footer />}
    </div>
  );
};

export default Main;
