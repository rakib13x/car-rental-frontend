import AOS from "aos";
import { useEffect } from "react";
import Search from "../Search/Search";

const Hero = ({}) => {
  useEffect(() => {
    AOS.refresh();
  });
  return (
    <div
      className="hero flex px-4 lg:px-12 py-12 sm:py-24 lg:py-48 justify-center align-middle bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(src/assets/images/hero-banner.jpg)` }}
    >
      <div className="max-w-auto md:max-w-7xl mx-auto grid gap-4 md:gap-12 lg:gap-16">
        <h1
          className={`text-2xl md:text-3xl lg:text-5xl text-center text-black `}
        >
          Choose your dream rental car and
          <br />
          make your ride awesome
        </h1>
        <Search />
      </div>
    </div>
  );
};

export default Hero;
