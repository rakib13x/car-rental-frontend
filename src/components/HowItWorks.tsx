import { BiSolidCar } from "react-icons/bi";
import { GiCardPlay, GiSteeringWheel } from "react-icons/gi";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import SectionWrapper from "../Shared/SectionWrapper/SectionWrapper";

const icons = [GiCardPlay, BiSolidCar, GiSteeringWheel];
function Service({
  index,
  title,
  desc,
}: {
  index: number;
  title: string;
  desc: string;
}) {
  const Icon = icons[index];
  return (
    <div className="flex gap-2 md:gap-4 lg:gap-8">
      <div>
        <Icon size={56} />
      </div>
      <div className="grid gap-2">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
}

const HowItWorks = () => {
  return (
    <div className="bg-sky-600 text-white">
      <SectionWrapper>
        <SectionTitle
          title={"How it works"}
          subtitle={"Let you know how our site is working"}
          dashColor={"fill-white"}
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-10">
          <div>
            <Service
              index={0}
              title="Book & pay"
              desc="Seamlessly provide access to distinctive vortals rather than multidisciplinary quality vectors."
            />
          </div>
          <div>
            <Service
              index={1}
              title="Receive & Enjoy"
              desc="Seamlessly provide access to distinctive vortals rather than multidisciplinary quality vectors."
            />
          </div>
          <div>
            <Service
              index={2}
              title="Car return"
              desc="Seamlessly provide access to distinctive vortals rather than multidisciplinary quality vectors."
            />
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default HowItWorks;
