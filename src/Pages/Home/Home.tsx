import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";
import CarList from "../../components/Car/CarList";
import Collaborate from "../../components/Collaborate/Collaborate";
import Hero from "../../components/Hero/Hero";
import HowItWorks from "../../components/HowItWorks";
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
      <WhyChoose />
      <Collaborate />
    </div>
  );
};

export default Home;
