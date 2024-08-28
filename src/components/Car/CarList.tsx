import { Link } from "react-router-dom";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import SectionWrapper from "../../Shared/SectionWrapper/SectionWrapper";
import { Button } from "../ui/button";
import CarCard from "./CarCard";

const CarList = ({ count }: { count?: number }) => {
  return (
    <SectionWrapper>
      <SectionTitle
        title={"List of Our Cars"}
        subtitle={"All types of cars for every occasion"}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 lg:gap-10">
        <CarCard count={count && count} />
      </div>
      <div className="mt-6 lg:mt-12 text-center">
        <Link to="/cars">
          <Button className="bg-orange-600 rounded-none py-5 px-6">
            View All Cars
          </Button>
        </Link>
      </div>
    </SectionWrapper>
  );
};

export default CarList;
