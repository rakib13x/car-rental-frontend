import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useGetAllCarsQuery } from "../../redux/features/cars/carApi"; // Your API hook
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import SectionWrapper from "../../Shared/SectionWrapper/SectionWrapper";
import { Car } from "../../types/global"; // Car type
import { Button } from "../ui/button";
import CarCard from "./CarCard";

const CarList = () => {
  const { data: carData, isLoading, error } = useGetAllCarsQuery(undefined);
  const [limitedCars, setLimitedCars] = useState<Car[]>([]);

  useEffect(() => {
    if (carData?.data) {
      setLimitedCars(carData.data.slice(0, 3)); // Limit to first 3 cars
    }
  }, [carData]);

  return (
    <SectionWrapper>
      <SectionTitle
        title={"List of Our Cars"}
        subtitle={"All types of cars for every occasion"}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 lg:gap-10">
        {isLoading ? (
          <div>Loading cars...</div>
        ) : error ? (
          <div>Error fetching cars</div>
        ) : limitedCars.length > 0 ? (
          limitedCars.map((car) => <CarCard key={car._id} car={car} />)
        ) : (
          <div>No cars available at the moment.</div>
        )}
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
