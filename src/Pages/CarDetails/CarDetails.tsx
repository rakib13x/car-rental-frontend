import { useParams } from "react-router-dom";
import { useGetCarByIdQuery } from "../../redux/features/cars/carApi";
// Adjust the import based on your folder structure

const CarDetails = () => {
  const { carId } = useParams(); // Get the car ID from the route parameters

  // Use the useGetCarByIdQuery hook to fetch the car data
  const { data: car, isLoading, error } = useGetCarByIdQuery(carId as string);
  console.log(car);

  if (isLoading) return <p>Loading car details...</p>;
  if (error) return <p>Error loading car details.</p>;

  return (
    <div>
      <h2>Car Details</h2>
      {car ? (
        <div>
          <h3>{car.name}</h3>
          <p>Model: {car.model}</p>
          <p>Manufacturer: {car.manufacturer}</p>
          <p>Price: {car.price}</p>
          <p>Year: {car.year}</p>
          {/* Add more car details as needed */}
        </div>
      ) : (
        <p>Car not found.</p>
      )}
    </div>
  );
};

export default CarDetails;
