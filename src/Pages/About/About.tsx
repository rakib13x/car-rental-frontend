import Advantages from "../../components/Advantages";
import Gallery from "../../components/Gallery/Gallery";
import Team from "../../components/Team";
import WhatWeAre from "../../components/WhatWeAre";

const About = () => {
  return (
    <>
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
