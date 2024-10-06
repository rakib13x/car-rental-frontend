// src/pages/Cars/Cars.tsx

import { useEffect, useState } from "react";
import CarCard from "../../components/Car/CarCard";
import PageTitle from "../../components/PageTitle";
import Pagination from "../../components/Pagination";
import SidebarFilter from "../../components/SideBarFilter";
import { useGetAllCarsQuery } from "../../redux/features/cars/carApi";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import SectionWrapper from "../../Shared/SectionWrapper/SectionWrapper";
import { Car } from "../../types/global";
import { getErrorMessage } from "../../utils/getErrorMessage";

export default function Cars() {
  const [filters, setFilters] = useState<any>({});
  const [currentPage, setCurrentPage] = useState(1);

  const {
    data: carData,
    isLoading,
    error,
    isError,
  } = useGetAllCarsQuery({
    ...filters,
    page: currentPage,
  });

  useEffect(() => {
    console.log("Current Filters:", filters);
    console.log("Current Page:", currentPage);
    console.log("Car data:", carData);
    console.log("Error:", error);
    console.log("Total Pages:", carData?.totalPages);
  }, [filters, currentPage, carData, error]);

  const handleFilterChange = (newFilters: any) => {
    setFilters(newFilters);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    console.log("Updating current page to:", page);
    setCurrentPage(page);
  };

  const totalPages = carData?.totalPages || 1;

  return (
    <>
      <Navbar />
      <PageTitle title={"Car List"} />
      <SectionWrapper>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <SidebarFilter onFilterChange={handleFilterChange} />
          <div className="col-span-1 md:col-span-2 order-first md:order-last">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-10">
              {isLoading ? (
                <div>Loading...</div>
              ) : isError ? (
                <div>Error loading cars data: {getErrorMessage(error)}</div>
              ) : carData?.data?.length ? (
                carData.data.map((car: Car) => (
                  <CarCard key={car._id} car={car} />
                ))
              ) : (
                <div>No car data found</div>
              )}
            </div>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </SectionWrapper>
      <Footer />
    </>
  );
}
