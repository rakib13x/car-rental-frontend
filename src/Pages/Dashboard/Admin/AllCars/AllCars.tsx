//@ts-nocheck
import { useState } from "react";
import Swal from "sweetalert2";
import AddModal from "../../../../Modal/AddModal";
import UpdateModal from "../../../../Modal/UpdateModal";
import {
  useDeleteCarMutation,
  useGetAllCarsQuery,
} from "../../../../redux/features/cars/carApi";

const AllCars = () => {
  const [showModal, setShowModal] = useState(false);
  const [updateShowModal, setUpdateShowModal] = useState(false);
  const [selectedCar, setSelectedCar] = useState<any>(null);
  const [page, setPage] = useState(1);

  const {
    data: carData,
    error,
    isLoading,
    refetch,
  } = useGetAllCarsQuery({
    page,
    limit: 100000,
  });

  const [deleteCar] = useDeleteCarMutation();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching cars</div>;

  const cars = carData?.data ?? [];
  console.log(cars);

  // Function to toggle modal visibility
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const updateToggleModal = () => {
    setUpdateShowModal(!updateShowModal);
  };

  // Handle delete car with SweetAlert confirmation and success/error messages
  const handleDelete = async (carId: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await deleteCar(carId).unwrap();
          refetch(); // Refetch cars after deletion

          // SweetAlert success message
          Swal.fire("Deleted!", "The car has been deleted.", "success");
        } catch (error) {
          console.error("Error deleting car:", error);

          // SweetAlert error message
          Swal.fire("Error!", "There was an error deleting the car.", "error");
        }
      }
    });
  };

  return (
    <div>
      {/* Modal */}
      {showModal && (
        <AddModal
          showModal={showModal}
          toggleModal={toggleModal}
          refetchCars={refetch} // Pass refetch function as a prop
        />
      )}

      {/* Main Content */}
      <div className="sm:px-6 w-full">
        <div className="px-4 md:px-10 py-4 md:py-7">
          <div className="lg:flex items-center justify-between">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">
              Cars
            </p>
            <div className="md:flex items-center mt-6 lg:mt-0">
              <button
                onClick={toggleModal}
                className="px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded text-white"
              >
                Add Car
              </button>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white px-4 md:px-8 xl:px-10 overflow-x-auto">
          <table className="w-full whitespace-nowrap">
            <thead>
              <tr className="h-20 w-full text-sm leading-none text-gray-600">
                <th className="font-normal text-left pl-4">#</th>
                <th className="font-normal text-left pl-11">Manufacturer</th>
                <th className="font-normal text-left pl-10">Model</th>
                <th className="font-normal text-left">Price</th>
                <th className="font-normal text-left">Type</th>
                <th className="font-normal text-left">Status</th>
                <th className="font-normal text-left w-32">Actions</th>
              </tr>
            </thead>
            <tbody className="w-full">
              {cars.map((car, index) => (
                <tr
                  key={car._id}
                  className="h-20 text-sm leading-none text-gray-700 border-b border-gray-200 bg-white hover:bg-gray-100"
                >
                  <td className="pl-4">{index + 1}</td>
                  <td className="pl-11">
                    <div className="flex items-center">
                      <img
                        className="shadow-md rounded-full w-10 h-10 mr-3"
                        src={car.image || "https://via.placeholder.com/150"}
                        alt={car.Manufacturers}
                      />
                      {car.Manufacturers}
                    </div>
                  </td>
                  <td>
                    <p className="mr-16 pl-10">{car.name}</p>
                  </td>
                  <td>
                    <p className="mr-16">${car.pricePerHour}</p>
                  </td>
                  <td>
                    <p className="mr-16">{car.vehicleType}</p>
                  </td>
                  <td>
                    <div className="w-20 h-6 flex items-center mr-16 justify-center bg-blue-50 rounded-full">
                      <p className="text-xs leading-3 text-blue-500">
                        {car.status || "Available"}
                      </p>
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center">
                      {updateShowModal && selectedCar && (
                        <UpdateModal
                          updateShowModal={updateShowModal}
                          updateToggleModal={updateToggleModal}
                          car={selectedCar}
                          refetchCars={refetch}
                        />
                      )}
                      <button
                        className="bg-gray-100 mr-3 hover:bg-gray-200 py-2.5 px-5 rounded text-sm leading-3 text-gray-500 focus:outline-none"
                        onClick={() => {
                          setSelectedCar(car);
                          updateToggleModal();
                        }}
                      >
                        Update
                      </button>
                      <button
                        className="bg-gray-100 mr-5 hover:bg-gray-200 py-2.5 px-5 rounded text-sm leading-3 text-gray-500 focus:outline-none"
                        onClick={() => handleDelete(car._id)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllCars;
