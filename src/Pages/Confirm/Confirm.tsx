import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useBookCarMutation } from "../../redux/features/booking/bookingAPi";

const Confirm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const bookingData = location.state || {};

  const {
    carName,
    carImage,
    price,
    additionalFeatures,
    date,
    startTime,
    firstName,
    lastName,
    email,
    address,
    city,
    region,
    zipCode,
    country,
    phone,
    nidNumber,
    license,
  } = bookingData;

  const [bookCar, { isLoading }] = useBookCarMutation();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const calculateAdditionalFeatures = () => {
    let featureCost = 0;
    if (additionalFeatures?.insurance) featureCost += 15;
    if (additionalFeatures?.gps) featureCost += 5;
    if (additionalFeatures?.childSeat) featureCost += 7;
    return featureCost;
  };

  const calculateTotalPrice = () => {
    return (price || 0) + calculateAdditionalFeatures();
  };

  const handleConfirmBooking = async () => {
    setIsSubmitting(true);

    try {
      await bookCar({
        carId: bookingData.carId,
        date: bookingData.date,
        startTime: bookingData.startTime,
        personalInfo: {
          firstName: bookingData.firstName,
          lastName: bookingData.lastName,
          email: bookingData.email,
          address: bookingData.address,
          city: bookingData.city,
          region: bookingData.region,
          zipCode: bookingData.zipCode,
          country: bookingData.country,
          phoneNumber: bookingData.phone,
          nidNumber: bookingData.nidNumber,
          drivingLicense: bookingData.license,
        },
        extraFeatures: {
          insurance: additionalFeatures?.insurance || false,
          gps: additionalFeatures?.gps || false,
          childSeat: additionalFeatures?.childSeat || false,
        },
        carPricePerHour: price,
        additionalFeaturesCost: calculateAdditionalFeatures(),
      }).unwrap();

      Swal.fire({
        title: "Success!",
        text: "Your booking has been confirmed.",
        icon: "success",
        confirmButtonText: "OK",
      });

      navigate("/bookings/my-bookings");
    } catch (error) {
      // Handle error scenarios
      Swal.fire({
        title: "Error!",
        text: "There was an error confirming your booking. Please try again.",
        icon: "error",
        confirmButtonText: "OK",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto p-8">
      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h1 className="text-3xl font-bold mb-6">Confirm Your Booking</h1>

        {/* Personal Information */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-gray-700">
                <strong>First Name:</strong> {firstName || "N/A"}
              </p>
              <p className="text-gray-700">
                <strong>Last Name:</strong> {lastName || "N/A"}
              </p>
              <p className="text-gray-700">
                <strong>Email:</strong> {email || "N/A"}
              </p>
              <p className="text-gray-700">
                <strong>Phone Number:</strong> {phone || "N/A"}
              </p>
            </div>
            <div>
              <p className="text-gray-700">
                <strong>Address:</strong> {address || "N/A"}
              </p>
              <p className="text-gray-700">
                <strong>City:</strong> {city || "N/A"}
              </p>
              <p className="text-gray-700">
                <strong>Region:</strong> {region || "N/A"}
              </p>
              <p className="text-gray-700">
                <strong>Zip Code:</strong> {zipCode || "N/A"}
              </p>
              <p className="text-gray-700">
                <strong>Country:</strong> {country || "N/A"}
              </p>
            </div>
          </div>
        </div>

        {/* Car Booking Information */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">
            Car Booking Information
          </h2>
          <div className="flex items-start">
            <img
              src={
                carImage ||
                "https://tuk-cdn.s3.amazonaws.com/can-uploader/Rectangle%20193.png"
              }
              alt="Car Image"
              className="w-32 h-32 mr-6"
            />
            <div>
              <p className="text-gray-700">
                <strong>Car Name:</strong> {carName || "N/A"}
              </p>
              <p className="text-gray-700">
                <strong>Booking Date:</strong> {date || "N/A"}
              </p>
              <p className="text-gray-700">
                <strong>Start Time:</strong> {startTime || "N/A"}
              </p>
              <p className="text-gray-700">
                <strong>Additional Features:</strong>
              </p>
              <ul className="list-disc ml-6 text-gray-700">
                {additionalFeatures?.insurance && <li>Insurance</li>}
                {additionalFeatures?.gps && <li>GPS</li>}
                {additionalFeatures?.childSeat && <li>Child Seat</li>}
              </ul>
            </div>
          </div>
        </div>

        {/* Pricing Summary */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Pricing Summary</h2>
          <p className="text-gray-700">
            <strong>Car Price Per Hour:</strong> ${price || "0"}
          </p>
          <p className="text-gray-700">
            <strong>Additional Features Cost:</strong> $
            {calculateAdditionalFeatures()}
          </p>
          <p className="text-gray-700 text-2xl font-semibold mt-4">
            <strong>Total Price:</strong> ${calculateTotalPrice()}
          </p>
        </div>

        {/* Confirm Button */}
        <button
          onClick={handleConfirmBooking}
          className="bg-green-600 text-white px-6 py-3 rounded-lg text-lg font-medium w-full"
          disabled={isLoading || isSubmitting}
        >
          {isLoading || isSubmitting ? "Confirming..." : "Confirm Booking"}
        </button>
      </div>
    </div>
  );
};

export default Confirm;
