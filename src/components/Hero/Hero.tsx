import AOS from "aos";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import heroCar from "../../assets/images/hero-car.jpg"; // Make sure the path is correct
import Search from "../Search/Search";

const Hero = () => {
  useEffect(() => {
    AOS.refresh();
  }, []);
  return (
    <section
      className="relative flex items-center px-4 lg:px-12 py-20 sm:py-28 lg:py-36 bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${heroCar})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>

      <div className="relative w-full max-w-7xl mx-auto text-center text-white grid gap-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
          Rent the perfect car for your next adventure
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-white/90 max-w-2xl mx-auto">
          Flexible pickup and drop-off, insured and well-maintained vehicles, and
          transparent pricing — everywhere you travel.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-2">
          <Link
            to="/cars"
            className="px-6 py-3 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-medium shadow-md"
          >
            Explore Cars
          </Link>
          <Link
            to="/login"
            className="px-6 py-3 rounded-full border border-white/30 text-white hover:bg-white/10"
          >
            Book Now
          </Link>
        </div>

        <div className="mt-6 w-full px-2 sm:px-6">
          <div className="bg-white/90 rounded-lg p-4 shadow-lg">
            <Search />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
