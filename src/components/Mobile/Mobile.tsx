import mobile from "../../assets/images/mobile-car.webp";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import SectionWrapper from "../../Shared/SectionWrapper/SectionWrapper";
import AppleButton from "./AppleButton";
import GooglePlayButton from "./GooglePlayButton";

const Mobile = () => {
  return (
    <SectionWrapper>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div>
          <img src={mobile} width={520} height={400} alt="Mobile image" />
        </div>
        <div>
          <SectionTitle
            title={"Get our APP on mobile"}
            subtitle={"Now available on"}
            align={"left"}
          />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry’s standard dummy text
            ever since the 1500.
          </p>
          <div className="flex gap-2 mt-4">
            <AppleButton
              bgColor={"orange-600"}
              textColor={"white"}
              iconColor={"fill-orange-600"}
              borderColor={"border-orange-600"}
              link="#"
            />
            <GooglePlayButton link="#" />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Mobile;
