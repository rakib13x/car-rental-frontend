import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import SectionWrapper from "../../Shared/SectionWrapper/SectionWrapper";
import CarCarousel from "./CarCarousel";

export default function Hotdeals() {
  return (
    <div className="bg-gray-100">
      <SectionWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-8 lg:gap-12">
          <div>
            <SectionTitle
              title={"Hot deals"}
              subtitle={"Daily spacial offers"}
              align={"left"}
            />
            <p className="mt-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry’s standard dummy text
              ever since the when an unknown printer took.
            </p>
          </div>
          <div className="col-span-2 mb-4">
            <CarCarousel />
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
