import Advantages from "../../components/Advantages";
import Gallery from "../../components/Gallery/Gallery";
import PageTitle from "../../components/PageTitle";
import Team from "../../components/Team";
import WhatWeAre from "../../components/WhatWeAre";
import WhyChoose from "../../components/WhyChoose/WhyChoose";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import Why from "../../components/why/why";
import Partner from "../../components/Partner/Partner";
import Vision from "../../components/Vision/Vision";
import AboutWatch from "../../components/AboutWatch/AboutWatch";
import NewFooter from "../../components/NewFooter/NewFooter";
import Testimonial from "../../components/Testimonial/Testimonial";
import Drivers from "../../components/Drivers/Drivers";

const About = () => {
  return (
    <>
      <Navbar />
      <PageTitle title="About Us" />
      {/* <article>
        <WhatWeAre />
        <Advantages />
        <Team />
        <Gallery />
      </article>
      <Footer /> */}
      <Why />
      <Partner />
      <Vision />
      <AboutWatch />
      {/* <WhyChoose /> */}
      <Drivers />
      <Testimonial />
      <NewFooter />
    </>
  );
};

export default About;
