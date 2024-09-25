import { useLocation } from "react-router-dom";

const Confirm = () => {
  const location = useLocation();
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

  return (
    <div className="container mx-auto">
      <div className="w-full mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-6">Confirm Your Booking</h1>

        {/* Personal Information */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
          <p>
            <strong>First Name:</strong> {firstName || "N/A"}
          </p>
          <p>
            <strong>Last Name:</strong> {lastName || "N/A"}
          </p>
          <p>
            <strong>Email:</strong> {email || "N/A"}
          </p>
          <p>
            <strong>Address:</strong> {address || "N/A"}
          </p>
          <p>
            <strong>City:</strong> {city || "N/A"}
          </p>
          <p>
            <strong>Region:</strong> {region || "N/A"}
          </p>
          <p>
            <strong>Zip Code:</strong> {zipCode || "N/A"}
          </p>
          <p>
            <strong>Country:</strong> {country || "N/A"}
          </p>
          <p>
            <strong>Phone Number:</strong> {phone || "N/A"}
          </p>
          <p>
            <strong>NID Number:</strong> {nidNumber || "N/A"}
          </p>
          <p>
            <strong>Driving License:</strong> {license || "N/A"}
          </p>
        </div>

        {/* Car Booking Information */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">
            Car Booking Information
          </h2>
          <div className="flex items-start mb-4">
            <img
              src={
                carImage ||
                "https://tuk-cdn.s3.amazonaws.com/can-uploader/Rectangle%20193.png"
              }
              alt="Car Image"
              className="w-32 h-32 mr-6"
            />
            <div>
              <p>
                <strong>Car Name:</strong> {carName || "N/A"}
              </p>
              <p>
                <strong>Booking Date:</strong> {date || "N/A"}
              </p>
              <p>
                <strong>Start Time:</strong> {startTime || "N/A"}
              </p>
              <p>
                <strong>Additional Features:</strong>
              </p>
              <ul>
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
          <p>
            <strong>Car Price Per Hour:</strong> ${price || "0"}
          </p>
          <p>
            <strong>Additional Features Cost:</strong> $
            {calculateAdditionalFeatures()}
          </p>
          <p>
            <strong>Total Price:</strong> ${calculateTotalPrice()}
          </p>
        </div>

        <button className="bg-green-600 text-white px-4 py-2 rounded">
          Confirm Booking
        </button>
      </div>
    </div>
  );
};

export default Confirm;
