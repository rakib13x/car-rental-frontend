import "aos/dist/aos.css";
import CarList from "../../components/Car/CarList";
import Hero from "../../components/Hero/Hero";
import HowItWorks from "../../components/HowItWorks/HowItWorks";
import Navbar from "../../Shared/Navbar/Navbar";
import Why from "../../components/why/why";
import OurService from "../../components/Service/OurService";
import Video from "../../components/Video/Video";
import ChooseUs from "../../components/ChooseUs/ChooseUs";
import Faq from "../../components/Faq/Faq";
import CTASection from "../../components/CTA/CTA";
import NewFooter from "../../components/NewFooter/NewFooter";
import Testimonial from "../../components/Testimonial/Testimonial";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      {/* <ServiceBar /> */}
      {/* <Advantages /> */}
      <CarList />
      <HowItWorks />
      {/* <Mobile /> */}
      {/* <Hotdeals /> */}
      {/* <WhyChoose />
      <Collaborate /> */}
      <Testimonial />
      {/* <CallToAction /> */}

      {/* <Footer /> */}
      <Why />
      <OurService />
      <HowItWorks />
      <Video />
      <ChooseUs />
      <Faq />
      <CTASection />
      <NewFooter />
    </div>
  );
};

export default Home;
