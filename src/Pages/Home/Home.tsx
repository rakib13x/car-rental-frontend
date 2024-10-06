import "aos/dist/aos.css";
import CallToAction from "../../components/CallToAction";
import CarList from "../../components/Car/CarList";
import Hero from "../../components/Hero/Hero";
import Hotdeals from "../../components/HotDeals/HotDeals";
import HowItWorks from "../../components/HowItWorks";
import Mobile from "../../components/Mobile/Mobile";
import ServiceBar from "../../components/ServiceBar";
import Testimonial from "../../components/Testimonial/Testimonial";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <ServiceBar />
      {/* <Advantages /> */}
      <CarList />
      <HowItWorks />
      <Mobile />
      <Hotdeals />
      {/* <WhyChoose />
      <Collaborate /> */}
      <Testimonial />
      <CallToAction />

      <Footer />
    </div>
  );
};

export default Home;
