import Advantages from "../../components/Advantages";
import Gallery from "../../components/Gallery/Gallery";
import PageTitle from "../../components/PageTitle";
import Team from "../../components/Team";
import WhatWeAre from "../../components/WhatWeAre";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";

const About = () => {
  return (
    <>
      <Navbar />
      <PageTitle title="About Us" />
      <article>
        <WhatWeAre />
        <Advantages />
        <Team />
        <Gallery />
      </article>
      <Footer />
    </>
  );
};

export default About;
