import Advantages from "../../components/Advantages";
import Gallery from "../../components/Gallery/Gallery";
import PageTitle from "../../components/PageTitle";
import Team from "../../components/Team";
import WhatWeAre from "../../components/WhatWeAre";

const About = () => {
  return (
    <>
      <PageTitle title="About Us" />
      <article>
        <WhatWeAre />
        <Advantages />
        <Team />
        <Gallery />
      </article>
    </>
  );
};

export default About;
