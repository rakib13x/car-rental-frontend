import CarCard from "../../components/Car/CarCard";
import PageTitle from "../../components/PageTitle";
import Pagination from "../../components/Pagination";
import SidebarFilter from "../../components/SideBarFilter";
import SectionWrapper from "../../Shared/SectionWrapper/SectionWrapper";

export default function Cars() {
  return (
    <>
      <PageTitle title={"Car List"} />

      <SectionWrapper>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <SidebarFilter />
          <div className="col-span-1 md:col-span-2 order-first md:order-last">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-10">
              <CarCard count={8} offset={2} />
            </div>
            <Pagination />
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
