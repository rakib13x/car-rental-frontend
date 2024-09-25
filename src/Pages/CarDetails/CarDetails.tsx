import { useState } from "react";
import { useParams } from "react-router-dom";
import { Input } from "../../components/ui/Input";
import { useBookCarMutation } from "../../redux/features/booking/bookingAPi";
import { useGetCarByIdQuery } from "../../redux/features/cars/carApi";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
// Import booking API

const CarDetails = () => {
  const { carId } = useParams(); // Get the car ID from the route parameters

  const {
    data: car,
    isLoading: carLoading,
    error: carError,
  } = useGetCarByIdQuery(carId as string);

  // Use bookCarMutation hook to make the booking request
  const [bookCar, { isLoading: bookingLoading, error: bookingError }] =
    useBookCarMutation();

  // State to store form data
  const [formData, setFormData] = useState({
    date: "",
    time: "",
  });

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const bookingData = {
      carId: carId,
      date: formData.date,
      startTime: formData.time,
    };

    try {
      const response = await bookCar(bookingData).unwrap();
      console.log("Booking successful:", response);
      alert("Car booked successfully!");
    } catch (err) {
      console.error("Booking failed:", err);
      alert("Failed to book the car.");
    }
  };

  if (carLoading) return <p>Loading car details...</p>;
  if (carError) return <p>Error loading car details.</p>;

  // Check if the car is already booked or not available
  const isCarBooked = car?.status === "not available"; // Assume "not available" means booked

  return (
    <>
      <Navbar />
      <div>
        <h2>Car Details</h2>
        {car ? (
          <div>
            <h3>{car.name}</h3>
            <p>Model: {car.name}</p>
            <p>Manufacturer: {car.Manufacturers}</p>
            <p>Price: {car.pricePerHour}</p>
            <p>Year: {car.year}</p>
          </div>
        ) : (
          <p>Car not found.</p>
        )}

        {/* Booking Form */}
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4">
            <Input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              placeholder="Date"
            />
            <Input
              type="text"
              name="time"
              value={formData.time}
              onChange={handleInputChange}
              placeholder="Start Time (HH:MM)"
            />

            <button
              type="submit"
              className="rounded-full bg-cyan-500 text-white hover:bg-cyan-600"
              disabled={isCarBooked || bookingLoading || carLoading}
            >
              {isCarBooked
                ? "Booked"
                : bookingLoading
                ? "Booking..."
                : "Book Car"}
            </button>
          </div>

          {bookingError && (
            <p className="text-red-500">Error booking car. Please try again.</p>
          )}
        </form>
      </div>
      <Footer />
    </>
  );
};

export default CarDetails;
