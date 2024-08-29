import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import SectionWrapper from "../../Shared/SectionWrapper/SectionWrapper";
import GalleryCars from "./GalleryCars";

export default function Gallery() {
  return (
    <div className="bg-gray-100">
      <SectionWrapper>
        <SectionTitle title={"Gallery"} subtitle={"Our featured gallery"} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <GalleryCars />
        </div>
      </SectionWrapper>
    </div>
  );
}
