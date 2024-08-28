import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";
import CarList from "../../components/Car/CarList";
import Collaborate from "../../components/Collaborate/Collaborate";
import Hero from "../../components/Hero/Hero";
import Hotdeals from "../../components/HotDeals/HotDeals";
import HowItWorks from "../../components/HowItWorks";
import Mobile from "../../components/Mobile/Mobile";
import WhyChoose from "../../components/WhyChoose/WhyChoose";

const Home = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <div>
      <Hero />
      {/* <Advantages /> */}
      <CarList />
      <HowItWorks />
      <Mobile />
      <Hotdeals />
      <WhyChoose />
      <Collaborate />
    </div>
  );
};

export default Home;
