import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import SectionWrapper from "../Shared/SectionWrapper/SectionWrapper";

const WhatWeAre = () => {
  return (
    <SectionWrapper>
      <SectionTitle
        title={"What we are"}
        subtitle={"We are writing a few about our history"}
      />
      <p className="text-center">
        We offer you to choose from a wide variety of car classes new
        high-quality vehicles meeting your needs and budget best. Renting a car
        for your business enterprise or vacation, we have a wide range of
        luxury, sports, and hybrid vehicles available to meet your every car
        rental need. Take your pick of a BMW, Ferrari, Lamborghini, Aston
        Martin, Tesla and more.
      </p>
      <img
        className="mx-auto"
        src="src/assets/images/what.webp"
        width={900}
        height={350}
        alt="About page"
      />
    </SectionWrapper>
  );
};

export default WhatWeAre;
